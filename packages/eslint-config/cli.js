module.exports = {
  extends: ['./typescript'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  ignorePatterns: ['**/bin/*.js'],
}
