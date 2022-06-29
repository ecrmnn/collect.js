"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = average;

var _is = require("../helpers/is");

function average(key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  if ((0, _is.isFunction)(key)) {
    return new this.constructor(this.items).sum(key) / this.items.length;
  }

  return new this.constructor(this.items).pluck(key).sum() / this.items.length;
}