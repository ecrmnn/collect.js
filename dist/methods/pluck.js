'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    var _collection = {};

    this.items.forEach(function (item) {
      _collection[item[key]] = item[value];
    });

    return new this.constructor(_collection);
  }

  var collection = this.items.filter(function (item) {
    return item[value] !== undefined;
  }).map(function (item) {
    return item[value];
  });

  return new this.constructor(collection);
};