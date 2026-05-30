import type { NextConfig } from 'next'

const sassOptions: NextConfig['sassOptions'] = {
  additionalData: `
    @use "./src/shared/styles/media-utils" as  *;
    @use "./src/shared/styles/helpers" as  *;
    `,
};

const nextConfig: NextConfig = {
  sassOptions: {
    ...sassOptions,
  },
  reactCompiler: true,
  experimental: {
    cssChunking: 'strict',
  },
  output: 'standalone',
}

export default nextConfig