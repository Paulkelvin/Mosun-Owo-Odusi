/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Disabled to avoid requiring 'critters' in development
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = nextConfig