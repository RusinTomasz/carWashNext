module.exports = {
  siteUrl: process.env.SITE_URL || "https://rankingmyjni.pl",
  generateRobotsTxt: true,
  exclude: ["/wyszukaj", "/server-sitemap.xml"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 8000,
  robotsTxtOptions: {
    additionalSitemaps: ["https://rankingmyjni.pl/serverSitemap.xml"],
  },
};
