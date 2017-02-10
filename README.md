angular1-sdk
===
>  Backand SDK for [Angular.js 1.x](https://angularjs.org/).
This is the documentation for Back&'s Angular 1 SDK. This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [vanilla-sdk](https://github.com/backand/vanilla-sdk) to allow you to work with Back& more easily when working on projects based on Angular.js 1.

## Overview
This SDK is an Angular 1 wrapper around our [vanilla-sdk](https://github.com/backand/vanilla-sdk). This provides convenient objects and properties for Angular 1 apps working with Back&. You can refer to the [vanilla-sdk](https://github.com/backand/vanilla-sdk)'s readme for a full API reference. Follow the instructions below to install our Angular 1 SDK!

## Installation
To install the Angular 1 SDK, use the correct command for your dependency management platform:

| Provider | Command |
| -------- | ------- |
| npm | `$ npm i -S @backand/angular1-sdk` |
| yarn | `$ yarn add @backand/angular1-sdk` |
| bower | `$ bower install backand-angular1-sdk` |
| clone/download via Git | `$ git clone $ git clone https://github.com/backand/angular1-sdk.git` |


## Import
Include the following tags in your `index.html` file to start working with the SDK via the CDN:

``` html
  <script src="//cdn.backand.net/vanilla-sdk/1.0.9/backand.js"></script>;
  <script src="//cdn.backand.net/angular1-sdk/1.9.5/backand.provider.js"></script>
```

Or, you can include the locally-installed SDKs with the following tags:

```html
<script src="lib/backand-vanilla-sdk/dist/backand.js"></script>
<script src="lib/backand-angular1-sdk/dist/backand.provider.js"></script>
```


## Quick start

Getting started with the SDK is as simple as configuring access to a Back& application, then calling `getList` on a relevant object:

```javascript
angular
  .module('myApp', ['backand'])
  .config(function (BackandProvider) {
    BackandProvider.init({
      appName: 'APP_NAME',
      anonymousToken: 'ANONYMOUS_TOKEN'
    });
  })
  .controller('myAppCtrl', ['$scope', '$http', 'Backand', function myAppCtrl() {

  }]);
```

Review the full API reference at our [vanilla-sdk's github](https://github.com/backand/vanilla-sdk) to get started with your back end!

## Migrating an old Angular 1 Backand App?

If you're migrating an older Angular 1 Backand app, which was built on our old SDK, we provide a [set of instructions](http://docs.backand.com/en/latest/what_would_you_like_to_do/convert_new_sdk/index.html) in our documentation that you can use to migrate your code. Simply follow the directions provided to get started!

## Examples
***To view a demo of the SDK in action, just run npm start - [example page](https://github.com/backand/angular1-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
