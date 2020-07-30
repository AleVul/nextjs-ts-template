module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "./configs/tsconfig.jest.json",
    },
  },
  setupFilesAfterEnv: ["./configs/setupTests.js"],
  rootDir: "..",
};
