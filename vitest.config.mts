import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: "default",
    coverage: {
      reporter: ["text"],
      provider: "v8",
      exclude: [
        ...defaultExclude,
        "src/test/**/*",
        ".**/**/*.js",
        ".**/**/*.ts",
        "perf/**/*.js",
        "src/migrations/**/*.ts",
        "src/migrations/**/*.js",
      ],
    },
    include: [
      "./src/@(test?(s)|__test?(s)__)/**/*.test.@(js|cjs|mjs|tap|cts|jsx|mts|ts|tsx)",
      //"./src/test/services/jobs/job-service.test.ts"
    ],
    // setupFiles: ["dotenv/config"], // to load env vars from .env file
    exclude: ["./src/**/@(fixture*(s)|dist|node_modules)/**"],
    maxConcurrency: 1,
    testTimeout: 120000, // Timeout in milliseconds,
  },
});
