'use strict';

var _require = require('../helpers/is'),
    isObject = _require.isObject;

module.exports = function skip(number) {
  if (isObject(this.items)) {
    return new this.constructor(Object.fromEntries(Object.entries(this.items).slice(number)));
  }

  return new this.constructor(this.items.slice(number));
};