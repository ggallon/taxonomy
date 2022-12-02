import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatar.vercel.sh"
    ],
  },
  experimental: {
    appDir: true,
  },
}

export default withContentlayer(nextConfig)
