'use strict';

module.exports = function mapWithKeys(fn) {
  const collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach((item) => {
      const array = fn(item);
      collection[array[0]] = array[1];
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      const array = fn(this.items[key]);
      collection[array[0]] = array[1];
    });
  }

  return new this.constructor(collection);
};
