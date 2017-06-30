'use strict';

module.exports = function map(fn) {
  var _this = this;

  if (Array.isArray(this.items)) {
    return new this.constructor(this.items.map(fn));
  }

  var hashmap = {};

  Object.keys(this.items).forEach(function (key) {
    hashmap[key] = fn(_this.items[key]);
  });

  return new this.constructor(hashmap);
};