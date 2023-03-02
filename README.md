# control-freak-paradise

This is a opinionated Yarn (Berry) starter monorepo using turborepo with additional tooling.

## What's inside?

This repo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

#### Apps

- `@cfp/docs`: a [Next.js](https://nextjs.org/) app
- `@cfp/web`: a [Create React App](https://create-react-app.dev/) app
- `@cfp/api`: an [Express](https://expressjs.com/) server

#### Packages

- `@cfp/ui`: a stub React component library shared by both `web` and `docs` applications
- `@cfp/eslint-config`: `eslint` config for client side apps (includes `eslint-config-react-app`, `eslint-config-turbo` and `eslint-config-prettier`)
- `@cfp/eslint-config-next`: `eslint` config for next apps (includes `eslint-config-next`)
- `@cfp/eslint-config-server`: `eslint` config for server side apps (`eslint-config-turbo` and `eslint-config-prettier`)
- `@cfp/jest-presets`: Jest configurations
- `@cfp/tsconfig`: `tsconfig.json`s used throughout the monorepo
- `@cfp/logger`: Basic logger wrapper around console.log

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Volta](https://docs.volta.sh/) for managing JavaScript command-line tools
- [Renovate](https://docs.renovatebot.com/) for automated dependency updates
- [Husky](https://typicode.github.io/husky/#/) for hooks when you commit or push
- [commitlint](https://commitlint.js.org/#/) for linting commit messages
- [lint-staged](https://github.com/okonet/lint-staged) for linting staged files automatically

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

### Lint

To lint all apps and packages, run the following command:

```bash
yarn run lint
```

### Test

To test all apps and packages, run the following command:

```bash
yarn run test
```

### Clean

To clean out the monorepo from `node_modules` and build outputs, run the following command:

```bash
yarn run clean
```

### Verify

Executes lints, tests and builds.

```bash
yarn run verify
```

#### Note

To clean out the monorepo, perform a fresh install and then verify run

```bash
yarn run clean && yarn && yarn run verify
```

## FAQ

### Why Renovate over Dependabot?

This repository is intended to work in enterprise settings where you're less likely to use GitHub for source-control.
I wanted a dependency updater that can be run on-prem and that supports updating a larger set of ecosystems than Dependabot (such as Docker).
