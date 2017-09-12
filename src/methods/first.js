'use strict';

module.exports = function first(fn) {
  if (typeof fn === 'function') {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      const item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
  }

  if (Array.isArray(this.items)) {
    return this.items[0];
  }

  return this.items[Object.keys(this.items)[0]];
};
