/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['security-node', 'simple-import-sort'],
  extends: [
    'turbo',
    'eslint:recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:security-node/recommended',
  ],
  env: {
    node: true,
  },
  ignorePatterns: ['**/dist/*.ts'],
  rules: {
    'simple-import-sort/imports': 'error',
    camelcase: 'off',
    'no-constant-binary-expression': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      rules: {
        'dot-notation': 'off',
      },
    },
    {
      files: ['**/*.{spec,test}.ts'],
      rules: {
        'import/first': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { overrides: { constructors: 'no-public' } },
        ],
      },
    },
  ],
}
