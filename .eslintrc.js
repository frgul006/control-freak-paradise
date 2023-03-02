module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-cfp`
  extends: ["cfp"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
