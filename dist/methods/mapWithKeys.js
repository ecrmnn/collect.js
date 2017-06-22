"use strict";

module.exports = function mapWithKeys(fn) {
  var collection = {};

  this.items.forEach(function (item) {
    var array = fn(item);
    collection[array[0]] = array[1];
  });

  return new this.constructor(collection);
};