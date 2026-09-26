/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/design',
        destination: '/storybook-static/index.html',
      },
      {
        source: '/design/:path*',
        destination: '/storybook-static/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/design',
        destination: '/design/index.html',
        permanent: true
      }
    ]
  },
  typescript: {
    tsconfigPath: "./tsconfig.build.json"
  },
}

export default nextConfig
