/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://daniellaszkowicz.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.7,
};
