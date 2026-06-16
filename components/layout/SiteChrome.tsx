"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ReadingProgress from "@/components/ui/ReadingProgress";

export default function SiteChrome({ position }: { position: "before" | "after" }) {
  const pathname = usePathname();

  if (pathname?.startsWith("/asset-labeler")) {
    return null;
  }

  if (position === "before") {
    return (
      <>
        <ReadingProgress />
        <Header />
      </>
    );
  }

  return (
    <>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
      <ScrollToTop />
    </>
  );
}
