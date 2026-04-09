"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}