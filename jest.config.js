module.exports = {
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  setupFilesAfterEnv: ['expect-puppeteer'],
  moduleDirectories: ['node_modules', 'src'],
};
