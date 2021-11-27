'use strict';

module.exports = function map(fn) {
  if (Array.isArray(this.items)) {
    return new this.constructor(this.items.map(fn));
  }

  const collection = {};

  Object.keys(this.items).forEach((key) => {
    collection[key] = fn(this.items[key], key);
  });

  return new this.constructor(collection);
};
