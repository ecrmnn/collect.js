'use strict';

module.exports = function combine(array) {
  const collection = {};

  this.items.forEach((key, iterator) => {
    collection[key] = array[iterator];
  });

  return new this.constructor(collection);
};
