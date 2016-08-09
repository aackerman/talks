// @flow
'use strict'
const Rect = require('./rect.js')

class Square extends Rect {
  constructor(width) {
    super(width, width)
  }
  getHeight() {
    return this.height
  }
}

let s = new Square(4)
let r = new Rect(4, 6)

function getArea(r: Rect): number {
  return r.getArea()
}

console.log( 'Square Area', getArea(s) )
console.log( 'Rect Area', getArea(r) )
