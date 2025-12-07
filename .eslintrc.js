module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // This must be the last extension to disable ESLint rules conflicting with Prettier
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Add your custom ESLint rules here
    'react/react-in-jsx-scope': 'off', // Next.js (and Docusaurus) doesn't require React to be in scope
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Often too strict for React components
    '@typescript-eslint/no-explicit-any': 'off', // Allow any for flexibility
    'prefer-const': 'error',
  },
};
