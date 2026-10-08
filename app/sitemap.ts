import type { MetadataRoute } from "next";
import { footerNav, nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...footerNav].map((p) => ({
    url: `${site.url}${p.href === "/" ? "" : p.href}`,
  }));
}
