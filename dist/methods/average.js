'use strict';

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function average(key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  if (isFunction(key)) {
    return new this.constructor(this.items).sum(key) / this.items.length;
  }

  return new this.constructor(this.items).pluck(key).sum() / this.items.length;
};