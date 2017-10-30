'use strict';

module.exports = function keyBy(key) {
  const collection = {};

  if (typeof key === 'function') {
    this.items.forEach((item) => {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach((item) => {
      collection[item[key] || ''] = item;
    });
  }

  return new this.constructor(collection);
};
