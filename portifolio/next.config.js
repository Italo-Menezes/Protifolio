/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* hostname "cdn.sanity.io" is not configured under images in your `next.config.js` */
  images: {
    domains: ['cdn.sanity.io'],
  },
}



module.exports = nextConfig
