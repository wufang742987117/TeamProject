# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

###修改下依赖源码
/node_modules/lib-flexible/flexible.js
if (width / dpr > 540) {
           width = 540) * dpr;
 }
修改为
if (width / dpr > 1366) {
           width = 1366) * dpr;
 }

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
