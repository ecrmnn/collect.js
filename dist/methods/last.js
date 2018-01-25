'use strict';

module.exports = function last(fn, defaultValue) {
  var items = this.items;

  if (typeof fn === 'function') {
    items = this.filter(fn).all();
  }

  if (Array.isArray(items) && items.length === 0 || Object.keys(items).length === 0) {
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  }

  if (Array.isArray(items)) {
    return items[items.length - 1];
  }
  var keys = Object.keys(items);

  return items[keys[keys.length - 1]];
};