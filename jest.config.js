module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ["ts", "js", "vue", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/components/*/*.vue",
  ],
  testEnvironment: "jsdom",
};
