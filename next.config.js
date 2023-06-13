// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const isProd = process.env.NODE_ENV === "production";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;

module.exports = {
  assetPrefix: isProd ? "https://tgifmike.github.io/newblog " : undefined,
};
