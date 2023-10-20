module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!micro-frontend-react-ui).*/'], // fix es modules
};
