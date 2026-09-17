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
  typescript: {
    tsconfigPath: "./tsconfig.build.json"
  },
}

export default nextConfig