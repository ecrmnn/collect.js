'use strict';

module.exports = function map(fn) {
  const collection = this.items.map(function(item) {
    return fn(item);
  });

  return new this.constructor(collection);
};
