/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: 'export',
  distDir: 'out',

  basePath: '/vibeify.live',  // Replace with your repository name or GitHub Pages subdirectory
  assetPrefix: '/vibeify.live/', 
};

module.exports = nextConfig;
