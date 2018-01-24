'use strict';

const values = require('../helpers/values');
const value = require('../helpers/value');
const empty = require('../helpers/empty');

module.exports = function first(fn, defaultValue) {
  if (typeof fn === 'function') {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      const item = this.items[i];
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
