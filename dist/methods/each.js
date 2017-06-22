"use strict";

module.exports = function each(fn) {
  this.items.forEach(fn);

  return this;
};