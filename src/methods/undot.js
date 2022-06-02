'use strict';

module.exports = function undot() {
  if (Array.isArray(this.items)) {
    return this;
  }

  let collection = {};

  Object.keys(this.items).forEach((key) => {
    if (key.indexOf('.') !== -1) {
      const obj = collection;

      key.split('.').reduce((acc, current, index, array) => {
        if (!acc[current]) {
          acc[current] = {};
        }

        if ((index === array.length - 1)) {
          acc[current] = this.items[key];
        }

        return acc[current];
      }, obj);

      collection = { ...collection, ...obj };
    } else {
      collection[key] = this.items[key];
    }
  });

  return new this.constructor(collection);
};
