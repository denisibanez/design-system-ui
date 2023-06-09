# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Informations

The app use:

1. Vue 3
2. Ts
3. Vite
4. Storybook
5. Jest
6. Quasar
7. Prettier
8. Lint
9. Husky

# Important commands

* "npm run dev" to run app
* "npm run build" to build app
* "npm run storybook" to view Design System
* "npm run build-storybook" to build Design System
* "npm run lint:fix" to check and fix code errors
* "npm run format" to format code
* "npm run test" to run tests with jest

# To publish package
1. add this line in package.json 
* "types": "./dist/main.d.ts"
2. npm run build
3. set github token in your system variables
* MAC OS
* export GITHUBTOKEN="YOUR_TOKEN"
* echo $GITHUBTOKEN
4. npm publish
5. Remove types line of package.json

# To install 
* npm install @corporate/design-system-ui@latest