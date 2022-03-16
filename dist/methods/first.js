'use strict';

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function first(fn, defaultValue) {
  if (isFunction(fn)) {
    var keys = Object.keys(this.items);

    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var item = this.items[key];

      if (fn(item, key)) {
        return item;
      }
    }

    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    var firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  return defaultValue;
};