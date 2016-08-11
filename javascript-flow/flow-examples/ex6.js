// @flow
// Example 6
'use strict'
const Rect = require('./rect.js')

class Square extends Rect {
  constructor(width) {
    super(width, width)
  }
}

const getArea = (s: Square): number => s.getArea()

let s = new Square(4)
let r = new Rect(4, 6)
console.log( 'Square Area', getArea(s) )
console.log( 'Rect Area', getArea(r) )
