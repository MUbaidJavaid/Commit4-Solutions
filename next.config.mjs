/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'invozone-backend.s3.us-east-1.amazonaws.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
