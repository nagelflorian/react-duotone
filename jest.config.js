module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: { lines: 70, functions: 70, branches: 60 },
  },
};
