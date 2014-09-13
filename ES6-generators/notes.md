# ES6 Generators, Iterables, `yield`

## Syntax

```
function *name()

function keyword, any whitespace, star, any whitespace, function name and/or parameter list
```

## Iterable Interface

```
function *ham() {
  yield 1;
  yield 2;
  return 3;
}

var h = ham(); // halts execution of the ham method and returns a iterator

// when next is called the executes until the first yield or return statement
h.next(); // { value: 1, done: false }
h.next(); // { value: 2, done: false }
h.next(); // { value: 3, done: true  }

// iterators return undefined if the final yield or return value has already been returned and continues to return true for the done value of the iterator
h.next(); // { value: undefined, done: true }
```

## yield* syntax

Allows yielding to another generator until that generator returns a `done: true` value.

```
function *ham() {
  yield 1;
  yield 2;
  yield 3;
  console.log('ham')
  return 45
}

function *ham2() {
  yield 1;
  yield* ham();
  return 4
}

var gen = ham2();
for(var value of gen) {
  console.log(value);
}
```

## for..of loops

`for..of` loops work natively with iterators and unroll the syntax behind the scenes, returning the value yielded from the iterator and ending when the object returns `done: true` from the iterator.

A very important detail of the `for..of` loop construct is the fact that the return value is completely ignored but all side-effects between the final `yield` statement and the return value are executed

## Facebook regenerator

ES5 code transformer to allow using `yield` and generator syntax in an ES5 environment using a state-machine under the covers.

## CSP in JavaScript

http://jlongster.com/Taming-the-Asynchronous-Beast-with-CSP-in-JavaScript

## Arrays as iterables

```
var a = [1,2,3];
var generator = a[Symbol.iterator]();
generator.next(); // { value: 1, done: false }
generator.next(); // { value: 2, done: false }
generator.next(); // { value: 3, done: false }
generator.next(); // { value: undefined, done: true }
```

## Maps, Sets, Objects

## Userland iterables

```
// define the object
var spam = {};

// install the iterator symbol
spam[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  return 3;
}

// use the iterator
for(var value of spam) {
  console.log(value);
}
```

## `Task.js`, `co`, `Q.async`

Both task.js and co work with generators to yield to all async operations, throw on promise errors and return resolved promise values.

```
task.spawn(function*(){
  try {
    yield response = xhr.get('/ham');
  } catch(err) {
    console.log('caught error', err)
  }
});

co(function*(){
  try {
    yield response = xhr.get('/ham');
  } catch(err) {
    console.log('caught error', err)
  }
});
```

