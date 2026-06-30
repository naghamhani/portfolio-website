/** @type {import('next').NextConfig} */
// basePath is supplied at build time (e.g. "/portfolio-website" on GitHub Pages)
// via NEXT_PUBLIC_BASE_PATH. Locally it is empty so the dev server works at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
