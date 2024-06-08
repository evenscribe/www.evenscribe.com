import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow:"/sth "
    },
    sitemap: "https://www.evenscribe.com/sitemap.xml",
  };
}
