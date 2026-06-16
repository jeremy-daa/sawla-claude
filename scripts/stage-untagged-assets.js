#!/usr/bin/env node

const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const fsSync = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const sharp = require("sharp");

const SUPPORTED_EXTENSIONS = new Set([
  ".avif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp",
]);

const DEFAULTS = {
  input: "images",
  output: "public/assets/untagged",
  manifest: "manifest.json",
  maxDimension: 2400,
  quality: 82,
};

function printHelp() {
  console.log(`
Stage raw Sawla Tours image assets as web-optimized WebP files.

Usage:
  npm run stage:assets
  npm run stage:assets -- --force
  node scripts/stage-untagged-assets.js --input images --output public/assets/untagged

Options:
  --input <dir>          Raw image directory. Default: ${DEFAULTS.input}
  --output <dir>         Staging directory. Default: ${DEFAULTS.output}
  --manifest <name>      Manifest file name inside output. Default: ${DEFAULTS.manifest}
  --max-dimension <px>   Max width or height, whichever is larger. Default: ${DEFAULTS.maxDimension}
  --quality <1-100>      WebP quality. Default: ${DEFAULTS.quality}
  --limit <count>        Process only the first N images. Useful for smoke tests.
  --force                Rebuild files even when the output already exists.
  --dry-run              Scan and report without writing output files.
  --verbose              Print every staged/skipped image.
  --help                 Show this help.
`);
}

function parseArgs(argv) {
  const options = {
    ...DEFAULTS,
    dryRun: false,
    force: false,
    limit: null,
    verbose: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = () => {
      index += 1;
      if (index >= argv.length) {
        throw new Error(`Missing value for ${arg}`);
      }
      return argv[index];
    };

    switch (arg) {
      case "--input":
        options.input = next();
        break;
      case "--output":
        options.output = next();
        break;
      case "--manifest":
        options.manifest = next();
        break;
      case "--max-dimension":
      case "--max-width":
        options.maxDimension = Number.parseInt(next(), 10);
        break;
      case "--quality":
        options.quality = Number.parseInt(next(), 10);
        break;
      case "--limit":
        options.limit = Number.parseInt(next(), 10);
        break;
      case "--force":
        options.force = true;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--verbose":
      case "-v":
        options.verbose = true;
        break;
      case "--help":
      case "-h":
        options.help = true;
        break;
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  if (!Number.isInteger(options.maxDimension) || options.maxDimension < 320) {
    throw new Error("--max-dimension must be an integer of at least 320");
  }

  if (!Number.isInteger(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error("--quality must be an integer from 1 to 100");
  }

  if (options.limit !== null && (!Number.isInteger(options.limit) || options.limit < 1)) {
    throw new Error("--limit must be a positive integer");
  }

  return options;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function fileExists(filePath) {
  return fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`;
}

function hashPath(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 8);
}

async function findImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findImages(fullPath)));
      continue;
    }

    if (entry.isFile() && SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function publicPathFor(outputRoot, outputFile) {
  const publicRoot = path.resolve("public");
  const relativeToPublic = path.relative(publicRoot, outputFile);

  if (relativeToPublic.startsWith("..") || path.isAbsolute(relativeToPublic)) {
    return null;
  }

  return `/${toPosix(relativeToPublic)}`;
}

function outputPathFor({ inputRoot, outputRoot, sourcePath, reservedOutputs }) {
  const relativeSource = path.relative(inputRoot, sourcePath);
  const parsed = path.parse(relativeSource);
  const relativeDir = parsed.dir;
  const baseName = parsed.name || hashPath(relativeSource);
  let relativeOutput = path.join(relativeDir, `${baseName}.webp`);

  const existingSource = reservedOutputs.get(relativeOutput.toLowerCase());
  if (existingSource && existingSource !== relativeSource) {
    relativeOutput = path.join(relativeDir, `${baseName}-${hashPath(relativeSource)}.webp`);
  }

  reservedOutputs.set(relativeOutput.toLowerCase(), relativeSource);

  return {
    relativeSource,
    relativeOutput,
    outputPath: path.join(outputRoot, relativeOutput),
  };
}

async function metadataFor(filePath) {
  return sharp(filePath, { failOn: "none", limitInputPixels: false }).metadata();
}

async function stageImage({ sourcePath, outputPath, options }) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const result = await sharp(sourcePath, { failOn: "none", limitInputPixels: false })
    .rotate()
    .resize({
      width: options.maxDimension,
      height: options.maxDimension,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: options.quality,
      effort: 5,
      smartSubsample: true,
    })
    .toFile(outputPath);

  return result;
}

function categoryFor(relativeSource) {
  const parts = toPosix(relativeSource).split("/");
  return parts.length > 1 ? parts[0] : null;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printHelp();
    return;
  }

  sharp.concurrency(Math.max(1, Math.min(4, os.cpus().length)));
  sharp.cache(false);

  const inputRoot = path.resolve(options.input);
  const outputRoot = path.resolve(options.output);

  if (!fsSync.existsSync(inputRoot)) {
    throw new Error(`Input directory does not exist: ${inputRoot}`);
  }

  if (!options.dryRun) {
    await fs.mkdir(outputRoot, { recursive: true });
  }

  let files = await findImages(inputRoot);
  if (options.limit !== null) {
    files = files.slice(0, options.limit);
  }

  const startedAt = new Date();
  const reservedOutputs = new Map();
  const manifest = {
    generatedAt: startedAt.toISOString(),
    sourceRoot: toPosix(path.relative(process.cwd(), inputRoot) || "."),
    outputRoot: toPosix(path.relative(process.cwd(), outputRoot) || "."),
    settings: {
      format: "webp",
      maxDimension: options.maxDimension,
      quality: options.quality,
      stripMetadata: true,
      preserveFolderStructure: true,
      normalizeFilenames: false,
    },
    totals: {
      discovered: files.length,
      processed: 0,
      skippedExisting: 0,
      failed: 0,
      inputBytes: 0,
      outputBytes: 0,
      savedBytes: 0,
    },
    images: [],
    errors: [],
  };

  console.log(`Staging ${files.length} image(s)`);
  console.log(`Input:  ${inputRoot}`);
  console.log(`Output: ${outputRoot}`);
  console.log(`WebP:   max ${options.maxDimension}px, quality ${options.quality}`);
  if (options.dryRun) console.log("Dry run: no files will be written");

  for (let index = 0; index < files.length; index += 1) {
    const sourcePath = files[index];
    const { relativeSource, relativeOutput, outputPath } = outputPathFor({
      inputRoot,
      outputRoot,
      sourcePath,
      reservedOutputs,
    });
    const relativeOutputPosix = toPosix(relativeOutput);
    const relativeSourcePosix = toPosix(relativeSource);

    try {
      const inputStats = await fs.stat(sourcePath);
      const sourceMetadata = await metadataFor(sourcePath);
      const outputExists = await fileExists(outputPath);
      const entry = {
        id: hashPath(relativeSourcePosix),
        status: "pending",
        category: categoryFor(relativeSource),
        source: {
          path: relativeSourcePosix,
          bytes: inputStats.size,
          width: sourceMetadata.width ?? null,
          height: sourceMetadata.height ?? null,
          format: sourceMetadata.format ?? null,
          orientation: sourceMetadata.orientation ?? null,
        },
        output: {
          path: relativeOutputPosix,
          publicPath: publicPathFor(outputRoot, outputPath),
          bytes: null,
          width: null,
          height: null,
          format: "webp",
        },
      };

      manifest.totals.inputBytes += inputStats.size;

      if (options.dryRun) {
        entry.status = outputExists ? "would-skip-existing" : "would-process";
        manifest.images.push(entry);
        continue;
      }

      if (outputExists && !options.force) {
        const outputStats = await fs.stat(outputPath);
        const outputMetadata = await metadataFor(outputPath);

        entry.status = "skipped-existing";
        entry.output.bytes = outputStats.size;
        entry.output.width = outputMetadata.width ?? null;
        entry.output.height = outputMetadata.height ?? null;
        manifest.totals.skippedExisting += 1;
        manifest.totals.outputBytes += outputStats.size;
        manifest.images.push(entry);

        if (options.verbose) {
          console.log(`[${index + 1}/${files.length}] skipped ${relativeOutputPosix}`);
        }
        continue;
      }

      const outputInfo = await stageImage({ sourcePath, outputPath, options });
      const outputStats = await fs.stat(outputPath);

      entry.status = "processed";
      entry.output.bytes = outputStats.size;
      entry.output.width = outputInfo.width ?? null;
      entry.output.height = outputInfo.height ?? null;
      manifest.totals.processed += 1;
      manifest.totals.outputBytes += outputStats.size;
      manifest.images.push(entry);

      if (options.verbose || (index + 1) % 25 === 0 || index === files.length - 1) {
        console.log(
          `[${index + 1}/${files.length}] staged ${relativeOutputPosix} ` +
            `(${formatBytes(inputStats.size)} -> ${formatBytes(outputStats.size)})`,
        );
      }
    } catch (error) {
      manifest.totals.failed += 1;
      manifest.errors.push({
        source: relativeSourcePosix,
        output: relativeOutputPosix,
        message: error instanceof Error ? error.message : String(error),
      });
      console.error(`[${index + 1}/${files.length}] failed ${relativeSourcePosix}: ${error.message}`);
    }
  }

  manifest.totals.savedBytes = manifest.totals.inputBytes - manifest.totals.outputBytes;

  if (!options.dryRun) {
    const manifestPath = path.join(outputRoot, options.manifest);
    await fs.writeFile(`${manifestPath}.tmp`, `${JSON.stringify(manifest, null, 2)}\n`);
    await fs.rename(`${manifestPath}.tmp`, manifestPath);
    console.log(`Manifest: ${toPosix(path.relative(process.cwd(), manifestPath))}`);
  }

  console.log("");
  console.log("Asset staging complete");
  console.log(`Processed:        ${manifest.totals.processed}`);
  console.log(`Skipped existing: ${manifest.totals.skippedExisting}`);
  console.log(`Failed:           ${manifest.totals.failed}`);
  console.log(`Input total:      ${formatBytes(manifest.totals.inputBytes)}`);
  console.log(`Output total:     ${formatBytes(manifest.totals.outputBytes)}`);
  console.log(`Estimated saved:  ${formatBytes(Math.max(0, manifest.totals.savedBytes))}`);

  if (manifest.totals.failed > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
