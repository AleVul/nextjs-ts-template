/**
 * Configuration file for nextjs.
 *
 * The `next-optimized-images` plugin uses some additional packages
 * to actually work: imagemin-optipng imagemin-mozjpeg imagemin-svgo.
 * More info about this in github page of next-optimized-images.
 */

const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const { withPlugins, optional } = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

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

  [
    optional(() =>
      require("@next/bundle-analyzer")({
        enabled: process.env.ANALYZE === "true",
      })
    ),
    {},
    [PHASE_PRODUCTION_BUILD],
  ],

  // this must be last in the array.
  nextConfig,
]);
