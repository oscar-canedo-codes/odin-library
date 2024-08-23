module.exports = {
  roots: ['<rootDir>/test'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
