'use strict';

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function last(fn, defaultValue) {
  var items = this.items;

  if (isFunction(fn)) {
    items = this.filter(fn).all();
  }

  if (Array.isArray(items) && !items.length || !Object.keys(items).length) {
    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(items)) {
    return items[items.length - 1];
  }

  var keys = Object.keys(items);
  return items[keys[keys.length - 1]];
};