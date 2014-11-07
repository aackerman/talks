## Front end build tooling

## High Level Concerns
  * Provide a good end-user experience, i.e. performance, TTFB, FOUC, OnLoad, DomContentLoaded
  * Reproducible builds for multiple environments
  * Fast build time
  * Easy deployment

## Low level concerns
  * Build tool vs Task runners
  * Capistrano, rsync
  * External library inclusion
  * Able to run locally in dev or production mode
  * Work with all types of assets, CSS, JS, Images, SVG, Templates, i18n
  * Cache invalidation, filename digesting, versioning
  * File caching headers on server-side
  * Dynamic template compilation for dev vs. production build
  * Dynamic filename lookup during build to handle production digest filenames
  * Dynamic rebuild on file tree change (saving, deleting, moving, switching branches)
  * Server response cycle is part of asset compilation, assets are blocked on recompilation (webpack dev server)
  * Concatenation order, dependency management
  * Minification/Obfuscation, UglifyJS, Google Closure Compiler
  * Transpilation; 6to5, CoffeeScript, ClojureScript, any Compile to JS Language
  * JS and CSS Source Maps
  * Build packs for initial download and deferred download of functionality
  * Uploading to CDN, edge network speed
  * Running tests in CI
  * Integrating ES6, CJS, AMD, and Globals libraries
  * Declarative (Grunt) vs Imperative (Gulp, Brocolli)
  * Ember-cli has a convention for folder structure, and working with Ember apps

### Library concerns
  * Intermediate representation caching, e.g. .sass-cache

## Advanced Techniques
  * Sending code as text to prevent parsing and execution time
  * Resolving dependencies asynchronously at runtime while avoiding n+1 dependency requests
    * https://github.com/google/module-server
  * Send styles, fonts, and javascript in a single file and splitting it at runtime
  * Statically gzipped assets
  * Stripping unused CSS rules
  * Identify Colors that the human eye cannot differentiate (https://github.com/SlexAxton/css-colorguard)
  * Image compression byte shaving (removing uncessary bytes)
  * webm and webp vs jpeg, gif, png
  * Using a large gif vs using a video
  * Inline data URIs when it makes sense
  * Automatic browser reload vs automatic hot code reload
  * A/B testing
  * Dynamic server-side, resolution of dependencies, and builds of modules a la Netflix

## Bespoke development
  * No convention for folder structure
  * Community distaste for frameworks
  * NIH is essentially the community motto
  * Less, Sass, Rework
  * Ember, Angular, React, Knockout, Backbone, Polymer
  * React components, Jade, EJS, Mustache, Handlebars, Dust, doT.js, Underscore templates, HTML + Angular
  * Bluebird, Q, RSVP, then/promise, when, Nearly 40 Promises/A+ compilant libraries
  * Plain JS, ES6 transpilation, JSX, Traceur, SweetJS, CoffeeScript, any other C2JS
  * AMD (Require.js), CJS (webpack, browserify)

## Build tools and resources
  * rails asset pipeline
  * npm
  * bower
  * grunt, gulp, broccoli, jake, make, brunch
  * git dependencies/submodules
  * firefox, chrome, opera, safari, ie devtools
  * packet sniffer
  * python -m SimpleHTTPServer
  * documentation, mdn, spec
  * jsperf
  * jsbin, jsfiddle, codepen
  * JShint JSlint
