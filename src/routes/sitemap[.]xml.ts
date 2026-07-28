import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CONDITIONS, LOCATIONS } from "@/lib/site-data";

// TODO: replace with the live domain once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/conditions", changefreq: "monthly", priority: "0.9" },
          { path: "/locations", changefreq: "monthly", priority: "0.9" },
          { path: "/online-consultation", changefreq: "monthly", priority: "0.9" },
          { path: "/videos", changefreq: "monthly", priority: "0.7" },
          { path: "/reviews", changefreq: "monthly", priority: "0.7" },
          { path: "/book", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...CONDITIONS.map((c) => ({
            path: `/conditions/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...LOCATIONS.map((l) => ({
            path: `/locations/${l.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
