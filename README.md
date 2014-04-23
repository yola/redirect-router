Redirect Router
===============

[![Build Status](https://travis-ci.org/yola/redirect-router.png)](https://travis-ci.org/yola/redirect-router)

A super simple Javascript module for redirecting a browser.

## Download it

* Download the [minified build](https://raw.githubusercontent.com/yola/redirect-router/master/build/router.min.js)
* Download the [source](https://raw.githubusercontent.com/yola/redirect-router/master/src/router.js)
* Bower install it with `bower install redirect-router`

## Source or Import it

Redirect Router can be used as a normal Javascript library

```html
<script src="redirect-router/build/compiled.js"></script>
```

Redirect Router can also be used as a RequireJS module

```javascript
var redirectRouter = require('path/to/redirect-router');
```

## Use it

### A simple redirect

```javascript
redirectRouter.redirect('http://yola.com');
```

### A timeout redirect

```javascript
redirectRouter.timeoutRedirect({
    url: 'http://yola.com',
    timeout: 400
});
```

### Set the nextUrl

You can also set the next url. The next time the router tries a redirect it will
default to this value.


```javascript
redirectRouter.setNextUrl('http://yola.com');
```

### Get the nextUrl

```javascript
var nextUrl = redirectRouter.getNextUrl();
```
