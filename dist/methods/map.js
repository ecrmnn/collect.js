"use strict";

module.exports = function map(fn) {
  return new this.constructor(this.items.map(function (item) {
    return fn(item);
  }));
};