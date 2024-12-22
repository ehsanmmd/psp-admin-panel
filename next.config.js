/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    NEXT_ADDRESS_APP: process.env.NEXT_ADDRESS_APP,
  },
  reactStrictMode: true,
  output: 'standalone',
};

module.exports = nextConfig;
