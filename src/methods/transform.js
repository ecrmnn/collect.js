'use strict';

module.exports = function transform(fn) {
  if (Array.isArray(this.items)) {
    this.items = this.items.map(fn);
  } else {
    const collection = {};

    Object.keys(this.items).forEach((key) => {
      collection[key] = fn(this.items[key], key);
    });

    this.items = collection;
  }

  return this;
};
