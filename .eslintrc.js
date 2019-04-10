'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['module-resolver', 'react-hooks'],
  env: {
    browser: true
  },
  globals: {
    React: false,
    COOKIE_KEYS: false,
    PORT: false,
    getEnvConfig: false
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-one-expression-per-line': [0],
    'no-shadow': ['error', { allow: ['webpackConfig'] }],
    'no-unused-vars': ['error', { vars: 'local' }],
    'no-param-reassign': ['error', { props: true }],
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/first': 'warn'
  }
}
