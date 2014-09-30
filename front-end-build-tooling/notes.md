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
Cache invalidation, filename digesting, versioning
Dynamic template compilation for dev vs. production build
Dynamic filename lookup during build to handle production digest filenames
Dynamic rebuild on file tree change (saving, deleting, moving, switching branches)
Automatic browser reload
Server response cycle is part of asset compilation, assets are blocked on recompilation (webpack dev server)
Fast compile time
Concatenation Order
Minification/Obfuscation, UglifyJS, Google Closure Compiler
JS and CSS Source Maps
Build Packs for initial download and later download of functionality
Uploading to CDN
Running tests
Integrating CJS, AMD, and Globals libraries
Declarative (Grunt) vs Imperative (Gulp, Brocolli)

Bespoke development
  * No convention for folder structure
  * Community distaste for frameworks
  * NIH is essentially the community motto
  * Less, Sass, Rework
  * Ember, Angular, React, Knockout, Backbone, Polymer
  * Jade, EJS, Mustache, Handlebars, Dust, doT.js, Underscore templates, HTML + Angular
  * Bluebird, Q, RSVP, then/promise, when, Nearly 40 Promises/A+ compilant libraries
  * Plain JS, ES6 transpilation, JSX, Traceur, SweetJS, CoffeeScript, any other C2JS
  * AMD (Require.js), CJS (webpack, browserify)
