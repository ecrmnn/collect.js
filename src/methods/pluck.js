'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    const collection = {};

    this.items.forEach(function(item) {
      collection[item[key]] = item[value];
    });

    return new this.constructor(collection);
  }

  const collection = this.items
    .filter(function(item) {
      return item.hasOwnProperty(value);
    })
    .map(function(item) {
      return item[value];
    });

  return new this.constructor(collection);
};
