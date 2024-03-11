/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**dev-media.almashhad.tv",
        port: "",
        // pathname: "/vod/1675331148835_mAaZD_large.webp**",
      },
    ],
  },
};

export default nextConfig;
