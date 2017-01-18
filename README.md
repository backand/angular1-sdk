bkndangular1-sdk
===
[![npm version](https://img.shields.io/npm/v/@backand/bkndangular1-sdk.svg?style=flat-square)](https://www.npmjs.org/package/@backand/bkndangular1-sdk)
[![npm downloads](https://img.shields.io/npm/dt/@backand/bkndangular1-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@backand/bkndangular1-sdk)

>  Backand SDK for [Angularjs1](https://angularjs.org/).
This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [bkndvanilla-sdk](https://github.com/backand/bkndvanilla-sdk) to allow easier work on projects involving Angularjs1.


## Installation
- npm:
```bash
$ npm i -S @backand/bkndangular1-sdk
```
- yarn:
```bash
$ yarn add @backand/bkndangular1-sdk
```
``` html
<script src="node_modules/@backand/bkndangular1-sdk/backand.provider.min.js"></script>
```
- download/clone this repo and include `backand.provider.min.js` in your project
``` html
<script src="backand.provider.min.js"></script>
```


## Quick start
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


## Examples
***To view the demo web page, just run npm start - [example page](https://github.com/backand/bkndangular1-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
