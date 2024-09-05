/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://forca-renatobmps.vercel.app/',
  priority: 0.7,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://forca-renatobmps.vercel.app/server-sitemap-index.xml',
    ],
  },
}

export default config;
