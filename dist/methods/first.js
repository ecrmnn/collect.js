'use strict';

var values = require('../helpers/values');
var value = require('../helpers/value');
var empty = require('../helpers/empty');

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

  if (!empty(this.items)) {
    return values(this.items)[0];
  }

  return value(defaultValue);
};