'use strict';

module.exports = function map(fn) {
  if (Array.isArray(this.items)) {
    return new this.constructor(this.items.map(fn));
  }

  const hashmap = {};

  Object.keys(this.items).forEach((key) => {
    hashmap[key] = fn(this.items[key]);
  });

  return new this.constructor(hashmap);
};
