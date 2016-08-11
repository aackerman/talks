// @flow
// Example 7
'use strict'
const Square = require('./square')
const Rect = require('./rect')

let s = new Square(4)
let r = new Rect(3, 4)

let likeARect = {
  getArea() { return 20 }
}

interface ILikeRect {
  getArea(): number
}

const getArea = (r: ILikeRect): number => r.getArea()

console.log( 'Square area', getArea(s) )
console.log( 'Rect area', getArea(r) )
console.log( 'Like a Rect area', getArea(likeARect) )
