/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com'
      }
    ]
  },
  env: {
    BizGPT_CLIENT_API_BASE_ADDRESS_SCHEME: process.env.BizGPT_CLIENT_API_BASE_ADDRESS_SCHEME,
    BizGPT_CLIENT_API_BASE_ADDRESS: process.env.BizGPT_CLIENT_API_BASE_ADDRESS,
    BizGPT_CLIENT_API_PORT: process.env.BizGPT_CLIENT_API_PORT,
    BizGT_CLIENT_API_BOOKMARK_PATH: process.env.BizGT_CLIENT_API_BOOKMARK_PATH,
    BizGPT_CLIENT_API_TOKEN_FRONTEND: process.env.BizGPT_CLIENT_API_TOKEN_FRONTEND
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
