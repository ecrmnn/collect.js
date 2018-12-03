'use strict';

module.exports = function reject(fn) {
  return new this.constructor(this.items).filter(function (item) {
    return !fn(item);
  });
};