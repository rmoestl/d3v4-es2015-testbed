# D3.js 4.x Testbed with ES2015 / ES6 syntax

## Motivation
[d3.js version 4.x](https://github.com/d3/d3/blob/master/CHANGES.md) is based on [ES2015 / ES6](https://babeljs.io/learn-es2015/) introducing nice features such as *arrow functions*. At the beginning of 2017 browsers don't fully support the new JavaScript standard. But we like to use ES2015 today, especially because larger frameworks like [Ember]() work with it out of the box.

## How to run it
- Simply run `npm run start`

## How it works
This small testbed is based on [budo](https://github.com/mattdesl/budo) &mdash; "a dev server for rapid prototyping".

What budo does is to serve your files, thereby transpiling files on the fly with [Browserify](http://browserify.org/) after they've been saved. Moreover it is able to live-reload your changes in the browser.

Furthermore this testbed uses [Babelify](https://github.com/babel/babelify). Babelify is transforming ES2015 module syntax into Common.js module syntax that is understood by Browserify. Browserify analyzes how modules expressed in Common.js code relate to each other and then produces a bundled JavaScript that can be referenced in a `<script>` tag of a HTML page.

How Babel, Browserify and Babelify relate can be read at <http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html>.