'use strict';

module.exports = function combine(array) {
  var collection = {};

  this.items.forEach(function (key, iterator) {
    collection[key] = array[iterator];
  });

  return new this.constructor(collection);
};