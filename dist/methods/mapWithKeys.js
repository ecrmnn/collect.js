'use strict';

module.exports = function mapWithKeys(fn) {
  var _this = this;

  var collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      var array = fn(item);
      collection[array[0]] = array[1];
    });
  } else {
    Object.keys(this.items).forEach(function (key) {
      var array = fn(_this.items[key]);
      collection[array[0]] = array[1];
    });
  }

  return new this.constructor(collection);
};