import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Path to your TypeScript config file
    },
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};

export default config;
