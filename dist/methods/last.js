'use strict';

module.exports = function last(fn) {
  if (typeof fn === 'function') {
    var collection = this.items.filter(fn);

    return collection[collection.length - 1];
  }

  return this.items[this.items.length - 1];
};