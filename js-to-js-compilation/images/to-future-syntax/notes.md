https://twitter.com/benjamn/status/646376537713975296

0.png - ES5 CommonJS style, JsFile extends InputFile using Object.create to create the prototype, correctly sets the constructor, and ensures that the InputFile is invoked with the correct thisArg.

1.png - Same ES5 CommonJS style using a utility to handle the details of the prototype and the constructor

2.png - Now using ES2015 class syntax specifying very clearly the `class JsFile extends InputFile`

3.png - Invoke an abstract reference to the super class constructor with spread arguments

4.png - The prototype `addJavaScript` method is moved into the class body making it unecessary to reference the prototype directly and use concise method syntax.

5.png - Remove the default constructor behavior

6.png - Destructure the options into variable references.

7.png - Use object literal shorthands to cleanup the object passed to the `_minifiedFiles` array.

8.png - Use module export syntax over CommonJS export syntax

9.png - Use a default parameter with destructuring to allow sourcemaps to default to `null`
