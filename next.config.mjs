/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "as2.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;
