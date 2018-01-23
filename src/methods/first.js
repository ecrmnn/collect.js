'use strict';

const value = require('../helpers/value');

module.exports = function first(fn, defaultValue) {
  if (typeof fn === 'function') {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      const item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
  }

  if (defaultValue !== undefined) {
    return value(defaultValue);
  }

  if (Array.isArray(this.items)) {
    return this.items[0];
  }

  return this.items[Object.keys(this.items)[0]];
};
