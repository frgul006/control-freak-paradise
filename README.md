# control-freak-paradise

This is a Yarn (Berry) starter monorepo using turborepo with additional tooling.

## What's inside?

This repo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `@cfp/docs`: a [Next.js](https://nextjs.org/) app
- `@cfp/web`: another [Next.js](https://nextjs.org/) app
- `@cfp/ui`: a stub React component library shared by both `web` and `docs` applications
- `@cfp/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@cfp/tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Volta]<https://docs.volta.sh/> for managing JavaScript command-line tools
- [Renovate]<https://docs.renovatebot.com/> for automated dependency updates

### Build

To build all apps and packages, run the following command:

```bash
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
yarn run dev
```
