import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sowaka-remedies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts();

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productEntries,
  ];
}
