'use strict';

module.exports = function flip() {
  const collection = {};

  Object.keys(this.items).forEach((key) => {
    collection[this.items[key]] = key;
  });

  return new this.constructor(collection);
};
