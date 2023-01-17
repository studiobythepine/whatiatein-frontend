/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: ["127.0.0.1"],
  },
};
