module.exports = {
  extends: ["turbo", "prettier"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.spec.ts", "**/*.test.ts", "**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
};
