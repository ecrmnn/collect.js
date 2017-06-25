'use strict';

module.exports = function flatMap(fn) {
  var _this = this;

  var values = [];

  Object.keys(this.items).forEach(function (property) {
    values.push(_this.items[property]);
  });

  var newValues = fn(values);

  var collection = {};

  Object.keys(this.items).forEach(function (value, index) {
    collection[value] = newValues[index];
  });

  return new this.constructor(collection);
};