/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.chec.io',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
