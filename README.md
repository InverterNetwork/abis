<div align="center">

[![license](https://img.shields.io/badge/License-LGPL%20v3-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@inverter-network/npm/latest.svg)](https://www.npmjs.com/package/@inverter-network/npm)
[![npm downloads](https://img.shields.io/npm/dm/@inverter-network/npm.svg)](https://www.npmjs.com/package/@inverter-network/npm)
[![Follow on Twitter](https://img.shields.io/twitter/follow/inverternetwork.svg?label=follow+INVERTER)](https://twitter.com/inverternetwork)

</div>

## Inverter / ABIs

Bun + Npm + ABI Bundler = Type Safe ABIs

## Summary

This package contains ABI Bundling scipts and the typescript ABIs themselves for [INVERTER](https://github.com/InverterNetwork).
Learn more about INVERTER on (https://inverter.network).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Install dependencies

Install Bun ( bun is used for testing for primitives no bun is needed ):

```bash
# Supported on macOS, Linux, and WSL

curl -fsSL https://bun.sh/install | bash

# Upgrade Bun every once in a while

bun upgrage

```

Install dependencies:

```bash
bun add @inverter-network/npm
```

or

```bash
npm install @inverter-network/npm
```

## Adding a new ABI

Adding a new ABI:

1. Add the .sol dir or json itseld to the `./in` folder

```bash
# Dev dev is watch mode build

bun run dev
```

or

```bash
bun run build

```

## How to make a release

**For the Maintainer**: Add NPM_TOKEN to the GitHub Secrets.

1. PR with changes
2. Merge PR into main
3. Checkout main
4. `git pull`
5. `npm run release`
6. Make sure everything looks good (e.g. in CHANGELOG.md)
7. `npm run postRelease`
8. Done

## Summary

This package contains ABI Bundling scipts and the typescript ABIs themselves for [INVERTER projects](https://github.com/InverterNetwork).
