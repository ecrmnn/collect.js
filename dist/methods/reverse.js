"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reverse;

function reverse() {
  var collection = [].concat(this.items).reverse();
  return new this.constructor(collection);
}

;