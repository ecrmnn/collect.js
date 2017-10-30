'use strict';

module.exports = function keyBy(key) {
  var collection = {};

  if (typeof key === 'function') {
    this.items.forEach(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      collection[item[key] || ''] = item;
    });
  }

  return new this.constructor(collection);
};