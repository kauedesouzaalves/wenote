/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src/tests"],
    setupFiles: ["<rootDir>/setupJest.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js"],
    testMatch: ["**/*.spec.ts", "**/*.test.ts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
};
