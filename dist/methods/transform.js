'use strict';

module.exports = function transform(fn) {
  var _this = this;

  if (Array.isArray(this.items)) {
    this.items = this.items.map(fn);
  } else {
    var collection = {};
    Object.keys(this.items).forEach(function (key) {
      collection[key] = fn(_this.items[key], key);
    });
    this.items = collection;
  }

  return this;
};