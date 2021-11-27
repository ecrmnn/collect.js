'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function last(fn, defaultValue) {
  let { items } = this;

  if (isFunction(fn)) {
    items = this.filter(fn).all();
  }

  if ((Array.isArray(items) && !items.length) || (!Object.keys(items).length)) {
    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(items)) {
    return items[items.length - 1];
  }
  const keys = Object.keys(items);

  return items[keys[keys.length - 1]];
};
