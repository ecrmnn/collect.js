'use strict';

module.exports = function pluck(value, key) {
  if (key !== undefined) {
    const collection = {};

    this.items.forEach((item) => {
      collection[item[key] || ''] = item[value] || null;
    });

    return new this.constructor(collection);
  }

  return this.map(item => item[value] || null);
};
