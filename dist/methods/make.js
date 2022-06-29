"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = make;

function make() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new this.constructor(items);
}