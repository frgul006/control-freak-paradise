module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ["@cfp/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
