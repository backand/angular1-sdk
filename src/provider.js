(function() {
    'use strict';

  angular
    .module('backand', [])
    .provider('Backand', BackandProvider);

  function BackandProvider() {
    this.init = backand.init;
    var config = { };
    this.setAppName = function (appName) {
      config.appName = appName;
      return this;
    };
    this.setAnonymousToken = function (anonymousToken) {
      config.anonymousToken = anonymousToken;
      return this;
    };
    this.setSignUpToken = function (signUpToken) {
      config.signUpToken = signUpToken;
      return this;
    };
    this.setApiUrl = function (newApiUrl) {
      config.apiUrl = newApiUrl;
      return this;
    };
    this.manageRefreshToken = function (manageRefreshToken) {
      config.manageRefreshToken = manageRefreshToken;
      return this;
    };
    this.runSigninAfterSignup = function (runSigninAfterSignup) {
       config.runSigninAfterSignup = runSigninAfterSignup;
       return this;
     };
    this.runSocket = function (runSocket) {
      config.runSocket = runSocket;
      return this;
    };
    this.setSocketUrl = function (newSocketUrl) {
      config.socketUrl = newSocketUrl;
      return this;
    };
    this.isMobile = function(isMobile){
      config.isMobile = isMobile;
    };

    this.$get = ['$timeout', function BackandFactory($timeout) {
      backand.init && backand.init(config);
      var backandAngular = { };
      for (let fn in backand) {
        if (typeof backand[fn] === "function") {
          backandAngular[fn] = function () {
            var args = [].slice.call(arguments);
            return $timeout.apply(undefined, [backand[fn], 0, true].concat(args));
          }
        }
        else {
          backandAngular[fn] = backand[fn];
        }
      }
      return backandAngular;
    }];
  }
})();
