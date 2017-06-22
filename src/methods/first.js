'use strict';

module.exports = function first(fn) {
  if (typeof fn === 'function') {
    for (let i = 0, length = this.items.length; i < length; i++) {
      const item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
    return;
  }

  return this.items[0];
};
