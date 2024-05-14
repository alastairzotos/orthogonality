/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
};

export default nextConfig;
