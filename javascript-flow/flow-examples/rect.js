// @flow
'use strict'
class Rect {
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

module.exports = Rect
