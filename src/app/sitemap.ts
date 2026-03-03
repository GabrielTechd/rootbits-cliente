import type { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/api";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rootbits.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts(true);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/portfolio/${post._id}`,
    lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...portfolioPages];
}
