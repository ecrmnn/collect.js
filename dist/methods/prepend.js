'use strict';

module.exports = function prepend(value, key) {
  if (key !== undefined) {
    return this.put(key, value);
  }

  this.items.unshift(value);
  return this;
};