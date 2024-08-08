# PNPM Changesets Monorepo
Demo for Monorepo with PNPM and Changesets.

# Initialize Monorepo

1. initialize package.json
```shell
> pnpm init
```

2. create `pnpm-workspace.yaml` file
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

3. create `.npmrc` file
```config
auto-install-peers=true
strict-peer-dependencies=false
```


# Initialize Changesets
1. install [changesets](https://github.com/changesets/changesets) on root
```shell
> pnpm install -w --save-dev @changesets/cli
```

2. initialize changesets
```shell
> pnpm changeset init
```

# Add Package
1. create `packages` folder
```shell
> mkdir packages
```

2. create package 
```shell
> npx @modern-js/create@latest packages/[package name]
```

# Binarary Package
1. create `bin.js` file
```js
#!/usr/bin/env node

const run = require('./').default;

run();
```

2. update packages.json
```json
  "bin": {
    "[binarary name]": "bin.js"
  },
```
