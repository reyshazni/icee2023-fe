/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/icee24/sponsor/**',
      },
    ],
  },
  env: {
    BE_STAGING_SPONSOR_URL:
      'https://be-production-s3ey3nqirq-et.a.run.app/asset/url-sponsor',
    BE_STAGING_MEDPAR_URL:
      'https://be-production-s3ey3nqirq-et.a.run.app/asset/url-media',
      BE_STAGING_URL:"https://be-staging-s3ey3nqirq-et.a.run.app/",
      BE_PROD_URL:"https://be-production-s3ey3nqirq-et.a.run.app/"

  },
}

module.exports = nextConfig
