'use strict';

module.exports = function keyBy(key) {
  let collection = {};

  if (typeof key === 'function') {
    this.items.map(function(item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function(item) {
      collection[item[key]] = item;
    });
  }

  return new this.constructor(collection);
};
