// next.config.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        permanent: true,
      },
    ];
  },
  typescript: {
    tsconfigPath: './tsconfig.build.json',
  },
  transpilePackages: ['design'],
  webpack: (config) => {
    config.resolve.alias['design'] = path.resolve(__dirname, '../../libs/design/src/index.ts');
    return config;
  },
};

export default nextConfig;
