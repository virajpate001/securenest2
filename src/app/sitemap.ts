// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { insuranceProducts } from "@/data/insurance-products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com";

  const staticRoutes = ["", "/about", "/blog", "/contact", "/get-a-quote", "/privacy-policy", "/terms", "/disclaimer"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })
  );

  const productRoutes = insuranceProducts.map((product) => ({
    url: `${baseUrl}/insurance/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}