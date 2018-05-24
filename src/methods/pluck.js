'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    const collection = {};

    this.items.forEach((item) => {
      if (item[value] !== undefined) {
        collection[item[key] || ''] = item[value];
      } else {
        collection[item[key] || ''] = null;
      }
    });

    return new this.constructor(collection);
  }

  return this.map((item) => {
    if (item[value] !== undefined) {
      return item[value];
    }

    return null;
  });
};
