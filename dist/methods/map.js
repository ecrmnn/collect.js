'use strict';

module.exports = function map(fn) {
  if (Array.isArray(this.items)) {
    return new this.constructor(this.items.map(fn));
  }

  var hashmap = {};

  for (var key in this.items) {
    hashmap[key] = fn(this.items[key]);
  }

  return new this.constructor(hashmap);
};