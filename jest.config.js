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
};
