'use strict';

module.exports = function filter(fn) {
  const collection = this.items.filter(function(item) {
    return fn(item);
  });

  return new this.constructor(collection);
};
