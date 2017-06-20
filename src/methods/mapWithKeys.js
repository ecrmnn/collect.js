'use strict';

module.exports = function mapWithKeys(fn) {
  const collection = {};

  this.items.map(function(item) {
    const array = fn(item);
    collection[array[0]] = array[1];
  });

  return new this.constructor(collection);
};
