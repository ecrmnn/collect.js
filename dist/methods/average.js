'use strict';

module.exports = function average(key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  return new this.constructor(this.items).pluck(key).sum() / this.items.length;
};