// @flow
'use strict'
const Rect = require('./rect.js')

class Square extends Rect {
  constructor(width: number) {
    super(width, width)
  }
}

module.exports = Square
