module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'no-use-before-define': 0,
  },
};
