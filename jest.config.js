module.exports = {
    preset: "ts-jest",
    testMatch: ["**/*.test.tsx", "**/*.test.ts"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.module\\.css$": "jest-css-modules",
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "lib/**/*.{js,jsx,ts,tsx}",
        "!lib/**/*.d.ts",
        "!lib/**/*.stories.tsx",
        "!lib/**/*.css",
        "!lib/constants/**/*",
        "!lib/**/testData/**",
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
