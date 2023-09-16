/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}
const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = { ...withVideos(), ...nextConfig }
