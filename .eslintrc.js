module.exports = {
  root: true,
  extends: ['@cfp/eslint-config/typescript'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
