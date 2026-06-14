# How to Change the Footer Social Icons

The footer's "Follow Our Journey" section displays seven social media icons: Instagram, TikTok, Twitter, YouTube, Facebook, TripAdvisor, and Google Reviews. There are two things you might want to change: the **URLs** the icons link to, and the **icons themselves** (add, remove, or swap).

---

## 1. Change a social media URL

All social links are stored in one place:

**File:** [`data/siteData.ts`](../data/siteData.ts) — lines 15–23

```ts
social: {
  instagram:   'https://www.instagram.com/sawlatours',
  tiktok:      'https://www.tiktok.com/@sawlatours',
  twitter:     'https://twitter.com/SawlaTours',
  facebook:    'https://www.facebook.com/sawlatours',
  youtube:     'https://www.youtube.com/@sawlafilms',
  tripadvisor: 'https://www.tripadvisor.com/Profile/sawlat',
  google:      'https://share.google/dRQeDJoZWcY8Oicwq',
},
```

Just replace the URL string for whichever platform you want to update. The footer will pick it up automatically via `SITE.social.<platform>`.

---

## 2. Add a new social icon

**Step 1 — Add the URL to `data/siteData.ts`:**

```ts
social: {
  // ... existing entries ...
  linkedin: 'https://www.linkedin.com/company/sawla-tours',
},
```

**Step 2 — Add the icon block in [`components/layout/Footer.tsx`](../components/layout/Footer.tsx):**

Copy any existing icon block (around line 70) and paste it after the last `</a>` inside the `flex flex-wrap gap-3` div. Then update three things:

1. `href` — use `SITE.social.linkedin` (or whatever key you added)
2. `aria-label` — the platform name, e.g. `"LinkedIn"`
3. The `<svg>` path — paste the brand's SVG path data

Example structure:

```tsx
<a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative">
  <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-ivory/60 group-hover:border-gold group-hover:text-gold transition-all duration-300">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </div>
  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-ivory/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
</a>
```

---

## 3. Remove a social icon

In [`components/layout/Footer.tsx`](../components/layout/Footer.tsx), find the `<a>` block for the platform you want to remove and delete the entire block — from the opening `<a` to its closing `</a>`. Each block is self-contained and spans about 6 lines.

For example, to remove Twitter, delete lines 84–89 (the block starting with `<a href={SITE.social.twitter}`).

You can also remove the corresponding key from `SITE.social` in `data/siteData.ts` to keep things tidy, though it won't cause any errors if you leave it.

---

## 4. Change an icon's SVG shape

If a platform rebrands (e.g. Twitter → X) or you want a different icon style:

1. Find a clean SVG for the platform (SimpleIcons at simpleicons.org is a reliable source)
2. Copy the `<path d="..."/>` value
3. In [`components/layout/Footer.tsx`](../components/layout/Footer.tsx), find the relevant `<svg>` block and replace its `<path>` with the new one
4. Keep `width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"` unchanged — these control sizing and colour

---

## Where things live (summary)

| What | File | Lines |
|------|------|-------|
| Social media URLs | `data/siteData.ts` | 15–23 |
| Icon HTML + SVGs | `components/layout/Footer.tsx` | 69–118 |
