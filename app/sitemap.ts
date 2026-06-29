import type { MetadataRoute } from "next";
import { seoData } from "../portfolio";

const siteUrl = (() => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || seoData.url;
  return configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
    ? configuredUrl
    : `https://${configuredUrl}`;
})();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
