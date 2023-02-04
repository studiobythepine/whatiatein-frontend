/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: "default",
//     domains: ["127.0.0.1", "res.cloudinary.com"],
//   },
// };


module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
}