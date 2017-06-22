"use strict";

module.exports = function transform(fn) {
  this.items = this.items.map(function (item) {
    return fn(item);
  });

  return this;
};