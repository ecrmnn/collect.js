'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    var collection = {};

    this.items.forEach(function (item) {
      collection[item[key] || ''] = item[value] || null;
    });

    return new this.constructor(collection);
  }

  return this.map(function (item) {
    return item[value] || null;
  });
};