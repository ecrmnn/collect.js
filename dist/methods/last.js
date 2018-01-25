'use strict';

module.exports = function last(fn, defaultValue) {
  var items = this.items;

  if (typeof fn === 'function') {
    items = this.filter(fn).all();
  }

  if (Array.isArray(items) && !items.length || !Object.keys(items).length) {
    if (typeof defaultValue === 'function') {
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