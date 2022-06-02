'use strict';

const clone = require('../helpers/clone');

module.exports = function undot() {
  let collection = {};

  Object.keys(this.items).forEach((key) => {
    if (key.indexOf('.') !== -1) {
      const obj = clone(collection);

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
