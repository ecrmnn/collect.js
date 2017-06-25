'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    const collection = {};

    this.items.forEach((item) => {
      collection[item[key]] = item[value];
    });

    return new this.constructor(collection);
  }

  const collection = this.items
    .filter(item => item[value] !== undefined)
    .map(item => item[value]);

  return new this.constructor(collection);
};
