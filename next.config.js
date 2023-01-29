/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },

  env: {
    TMBD_API_KEY: process.env.TMBD_API_KEY,
  },
};

module.exports = nextConfig;
