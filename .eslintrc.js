module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'no-console': ["error", {allow: ["tron"]}],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
  },
};
