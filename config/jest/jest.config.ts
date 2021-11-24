import path from 'path';

const rootPath = path.resolve(path.resolve(), './');

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: rootPath,
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/config/jest/noopMock.ts',
  },
};
