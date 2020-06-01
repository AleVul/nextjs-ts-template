/**
 * Configuration file for nextjs.
 *
 * The `next-optimized-images` plugin uses some additional packages
 * to actually work: imagemin-optipng imagemin-mozjpeg imagemin-svgo.
 * More info about this in github page of next-optimized-images.
 */

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Custom nextjs config.
 * Place your config here.
 */
const nextConfig = {
  /**
   * This disables gzip compression done by node process
   * serving your nextjs app. It is better to use
   * a tool such as nginx for compression to free up
   * resources for the node process.
   */
  compress: false,
  poweredByHeader: false,
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],

  [bundleAnalyzer, {}],

  // this must be last in the array.
  nextConfig,
]);
