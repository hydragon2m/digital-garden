import type { MetadataRoute } from "next";
import { seoData } from "../portfolio";

const siteUrl = (() => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || seoData.url;
  return configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
    ? configuredUrl.replace(/\/$/, "")
    : `https://${configuredUrl.replace(/\/$/, "")}`;
})();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
