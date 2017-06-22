'use strict';

module.exports = function first(fn) {
  if (typeof fn === 'function') {
    for (var i = 0; i < this.items.length; i += 1) {
      var item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }
  }

  return this.items[0];
};