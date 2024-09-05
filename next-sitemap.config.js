/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://forca-wheat.vercel.app/',
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://forca-wheat.vercel.app/server-sitemap-index.xml',
    ],
  },
}

export default config;
