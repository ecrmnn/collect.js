'use strict';

const { isFunction } = require('../helpers/is');

module.exports = function first(fn, defaultValue) {
  if (isFunction(fn)) {
    const keys = Object.keys(this.items);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const item = this.items[key];

      if (fn(item, key)) {
        return item;
      }
    }

    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if ((Array.isArray(this.items) && this.items.length) || (Object.keys(this.items).length)) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    const firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  return defaultValue;
};
