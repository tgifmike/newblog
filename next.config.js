/**
 * @type {import('next').NextConfig}
 */

const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: false,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
  assetPrefix: !debug ? "https://tgifmike.github.io/newblog/" : "",
};

module.exports = nextConfig;

// next.config.js

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let assetPrefix = "";
// let basePath = "/";

// if (isGithubActions) {
//   // trim off `<owner>/`
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

//   assetPrefix = `/${"tgifmike.github.io/newblog"}/`;
//   basePath = `/${"tgifmike.github.io/newblog"}`;
// }

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   nextConfig,
// };
