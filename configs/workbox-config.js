module.exports = {
  //globDirectory: ".",
  //globPatterns: ["**/*.js"],
  swDest: "public/sw.js",
  cacheId: "nextjs-template-v1",
  // TODO: this requires a hash
  // dontCacheBustURLsMatching: "",
  runtimeCaching: [
    {
      urlPattern: /_next\/static\/[a-zA-Z0-9_-]*\/pages\/[_a-z]*\.js$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        expiration: {
          maxEntries: 200,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
