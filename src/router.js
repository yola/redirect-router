/* global define */
(function() {
  'use strict';

  function Exception(message) {
    this.message = message;
    this.name = 'Exception';
  }

  var root = window || this;
  var nextUrl;

  var redirectRouter = {
    redirect: function(url) {
      nextUrl = url || nextUrl;
      window.location.href = nextUrl;
    },

    timeoutRedirect: function(options) {
      var timeout = 0;
      var url;

      if (options) {
        url = options.url;
        timeout = options.timeout;
      }

      nextUrl = url || nextUrl;
      timeout = timeout || 0;

      setTimeout(this.redirect, timeout);
    },

    setNextUrl: function(url) {
      if(nextUrl) {
        throw new Exception('Next URL already set to: ' + nextUrl);
      }
      nextUrl = url;
    },

    getNextUrl: function() {
      return nextUrl;
    }
  };

  // Export router:
  var defineExists = typeof define === 'function';
  if (defineExists && typeof define.amd === 'object' && define.amd) {
    define(function() {
      return redirectRouter;
    });
  } else {
    root.redirectRouter = redirectRouter;
  }
})();
