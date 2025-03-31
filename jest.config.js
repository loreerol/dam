module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",  // Ensure JSDOM is being used
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  };