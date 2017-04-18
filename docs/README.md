## Install Docpress

```bash
npm init
npm install docpress --save
./start_docs
```

## Install
```bash
mkdir jspm-test
cd jspm-test
npm init
npm install jspm --save-dev
npm install http-server --save-dev
node_modules/.bin/jspm init
```

### CSS plugin and Spectre
```bash
./jspm install css
./jspm install spectre=npm:spectre.css
cd jspm_packages/npm/spectre.css@...
npm install && node_modules/.bin/gulp build
```

### Testing packages
```bash
./jspm install chai
./jspm install mocha
```

## Bundling JS
```bash
mkdir build
./bundle
```

## React
```bash
./jspm install jsx
./jspm install react react-dom
```

## Bundling React
```bash
./bundle src/main.jsx!
```

## Samsara
```bash
./jspm install samsara=github:rnprojekt/samsara
```

## Reactor2 optional packages
```bash
./jspm install eventemitter3=github:primus/eventemitter3
./jspm install page
./jspm install underscore
./jspm install async
./jspm install fastclick
./jspm install mixwith=github:rnprojekt/mixwith.js
./jspm install npm:webfontloader
./jspm install npm:dot
./jspm install npm:machina
./jspm install npm:xStore
./jspm install i18next
```

## Install Gulp
```bash
npm install gulp --save-dev
npm install del run-sequence require-dir --save-dev
npm install gulp-connect connect-history-api-fallback --save-dev
npm install gulp-html-replace git-rev --save-dev
npm install gulp-run gulp-filter gulp-filesize --save-dev
```

### Gulp
```bash
./gulp serv
```
