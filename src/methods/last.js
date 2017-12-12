'use strict';

module.exports = function last(fn) {
  if (typeof fn === 'function') {
    const collection = this.items.filter(fn);

    return collection[collection.length - 1];
  }

  if (Array.isArray(this.items)) {
    return this.items[this.items.length - 1];
  }

  const keys = Object.keys(this.items);
  return this.items[keys[keys.length - 1]];
};
