/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/600x400.png',
      },
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
    ],
  },
}

module.exports = nextConfig
