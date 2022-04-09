# vue-laravel-echo
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package]](https://npmjs.org/package/@kangangga/vue-laravel-echo)
[![Code Coverage]](https://codecov.io/gh/kangangga/vue-laravel-echo)
[![semantic-release]](https://github.com/semantic-release/semantic-release)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[Build Status]: https://github.com/kangangga/vue-laravel-echo/actions/workflows/ci.yml/badge.svg
[NPM Package]: https://img.shields.io/npm/v/@kangangga/vue-laravel-echo.svg
[Code Coverage]: https://codecov.io/gh/kangangga/vue-laravel-echo/branch/master/graph/badge.svg
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

> vue router

## Install

``` shell
npm install @kangangga/vue-laravel-echo
#OR
yarn add @kangangga/vue-laravel-echo
```

## config

``` javascript
import App from "./App.vue";
import { createApp } from "vue";
import VueEcho from '@kangangga/vue-laravel-echo'

const app = createApp(App);

app.use(VueEcho, {
  key: "1234567",
  cluster: "mt1",
  wsPort: 6001,
  wssPort: 6001,
  wsHost: "localhost",
  enabledTransports: ["ws", "flash"],
  authEndpoint: "http://localhost:8000/laravel-websockets/auth",
  enableStats: true,
  forceTLS: false,
});

```

## Related

TODO

## Acknowledgments

TODO