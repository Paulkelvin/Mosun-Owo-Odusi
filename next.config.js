/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Disabled to avoid requiring 'critters' in development
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = nextConfig