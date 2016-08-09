// @flow
'use strict'
const Rect = require('./rect')

const getArea = (r: Rect): number => r.getArea()

const r = new Rect(2, 5)

console.log( 'Area of rectangle', getArea(r) )
