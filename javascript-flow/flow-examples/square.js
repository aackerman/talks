// @flow
'use strict'
const Rect = require('./rect.js')

class Square extends Rect {
  constructor(width) {
    super(width, width)
  }
}
