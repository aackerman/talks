Rails asset pipeline
npm
bower
grunt
gulp
broccoli
vendoring

## Concerns

* Reproducible builds for multiple environments
* Fast

Build tool vs Task runners
External library inclusion
Able to run locally in dev or production mode
Work with all types of assets, CSS, JS, Images, SVG, Templates
Cache invalidation, filename digesting, versioning
File caching headers on server-side
Dynamic template compilation for dev vs. production build
Dynamic filename lookup during build to handle production digest filenames
Dynamic rebuild on file tree change (saving, deleting, moving, switching branches)
Automatic browser reload (hot reload)
Server response cycle is part of asset compilation, assets are blocked on recompilation (webpack dev server)
Fast compile time
Concatenation Order
Minification/Obfuscation, UglifyJS, Google Closure Compiler
JS and CSS Source Maps
Build Packs for initial download and later download of functionality
Uploading to CDN
Running tests in CI
A/B testing
Integrating ES6, CJS, AMD, and Globals libraries
Declarative (Grunt) vs Imperative (Gulp, Brocolli)
Ember-cli has a convention for folder structure

Advanced Techniques
  * Sending code as text to prevent parsing and execution time
  * Resolving dependencies asynchronously at runtime while avoiding n+1 dependency requests
    * https://github.com/google/module-server
  * Send styles, fonts, and javascript in a single file and splitting it at runtime
  * Statically gzipped assets
  * Stripping unused CSS rules
  * Identify Colors that the human eye cannot differentiate (https://github.com/SlexAxton/css-colorguard)
  * Image compression byte shaving (removing uncessary bytes)
  * webm and webp vs jpeg, gif, png
  * Inline data URIs when it makes sense

Bespoke development
  * No convention for folder structure
  * Community distaste for frameworks
  * NIH is essentially the community motto
  * Less, Sass, Rework
  * Ember, Angular, React, Knockout, Backbone, Polymer
  * React components, Jade, EJS, Mustache, Handlebars, Dust, doT.js, Underscore templates, HTML + Angular
  * Bluebird, Q, RSVP, then/promise, when, Nearly 40 Promises/A+ compilant libraries
  * Plain JS, ES6 transpilation, JSX, Traceur, SweetJS, CoffeeScript, any other C2JS
  * AMD (Require.js), CJS (webpack, browserify)
