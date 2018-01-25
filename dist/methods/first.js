'use strict';

var value = require('../helpers/value');

module.exports = function first(fn, defaultValue) {
  if (typeof fn === 'function') {
    for (var i = 0, length = this.items.length; i < length; i += 1) {
      var item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }

    return value(defaultValue);
  }

  if (Array.isArray(this.items) && this.items.length !== 0 || Object.keys(this.items).length !== 0) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    var firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  return value(defaultValue);
};