// @flow
'use strict'
class Rect {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

module.exports = Rect
