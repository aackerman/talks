JavaScript to JavaScript Compilation

## Babel and Compilers Intro

I just saw an interesting tweet last week. Babel is a year old now. This is my second talk including Babel this year. If you're a local, maybe you saw my talk on Babel at Minnebar, it was mostly to discuss why you might want to use Babel and all of the nifty integrations with all of the other build tools. I'm going to discuss some of the same today but I'm also going to discuss some other tools, and some trends that I'm seeing about compiler tools across languages and communities.

If you're hearing about Babel for the first time today or you are unfamiliar with compilers. A compiler program accepts source code and transforms the input into other code. GCC is a C++ compiler, it transforms C++ source into machine code. CoffeeScript is a popular to-JavaScript compiler. CoffeeScript defines it's own syntax and semantics that looks like a mashup of JavaScript and Ruby, it reads this code and transforms that into JavaScript source code that works in a JavaScript runtime. Babel is a compiler as well. It takes JavaScript code and outputs different JavaScript code.

There have been several future syntax JavaScript compilers. Other compilers: esnext, esnow, es6-module-transpiler, traceur-compiler, jstransform. Arguably, Babel is now the de facto standard, with several of the other compilers being deprecated in favor of using Babel.

* esnow - uses Babel
* esnext - merged with Babel
* es6-module-transpiler - deprecated in favor of Babel
* JSTransform - recommends using Babel
* traceur-compiler - still going strong

I'm far from an expert on compilers, but I want to say a few words. The Babel project uses a parser called Babylon, originally based on the Acorn JavaScript parser.

## Babel Integrations

* Browserify
* ESlint
* Grunt
* Gulp
* Jasmine
* Mocha
* Node
* React/JSX/Flow
* Webpack
* Many more...

## Major patterns

Rest/spread for arrays and objects, destructuring, classes, generators/yield, classes, module syntax, arrow functions, object literal shorthands, for..of, template strings, let/const, async/await. Easier to understand and more elegant than patterns available in ES5.

https://twitter.com/benjamn/status/646376537713975296

## Babel default transforms, polyfills, and options

## Code re-writting tools and patterns

Babel is a tool for rewriting code. A few other code re-writing tools exist including `recast` and `jscodeshift`. If you've been paying attention to the Go community recently you'll know there was a big push by the Go team to rewrite the compiler. The team decided it would be a bad decision to do this by hand. So they wrote a compiler to transform all of the C code in the original Go compiler to being implemented in the Go language itself. So Go now uses a self-hosted compiler that was mostly rewritten automatically with a few pieces needing to be updated by hand.

The React team releases some code rewriting tools as well, to help React consumers including Facebook themselves to update between different version of React. Code rewriting is often a time consuming and error prone process, writing code to update your code

I'm expecting static analysis and code rewriting to be the next big deal in JavaScript.

## Notes

[ ] - Create slides about compilers intro
[ ] - Create slides to show the current state of future syntax compilers
[ ] - Create slides about Babel integrations
[ ] - Create slides showing the input and output of the React codemods
[ ] - Create slides showing the inputs and outputs of Babel
[ ] - Create slides to discuss the tweet from the MeteorJS team
[ ] - Discuss eslint "auto-fixing"
[ ] - Discuss "auto-imports"
