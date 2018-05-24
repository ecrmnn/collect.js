'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    var collection = {};

    this.items.forEach(function (item) {
      if (item[value] !== undefined) {
        collection[item[key] || ''] = item[value];
      } else {
        collection[item[key] || ''] = null;
      }
    });

    return new this.constructor(collection);
  }

  return this.map(function (item) {
    if (item[value] !== undefined) {
      return item[value];
    }

    return null;
  });
};