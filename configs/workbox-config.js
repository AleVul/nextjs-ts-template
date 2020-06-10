module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.js"],
  swDest: "public/sw.js",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
};
