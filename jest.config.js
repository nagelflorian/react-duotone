module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  coverageThreshold: {
    global: {
      lines: 70,
      functions: 70,
      branches: 60,
    },
  },
};
