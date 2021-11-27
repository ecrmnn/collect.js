'use strict';

module.exports = function flip() {
  const collection = {};

  if (Array.isArray(this.items)) {
    Object.keys(this.items).forEach((key) => {
      collection[this.items[key]] = Number(key);
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      collection[this.items[key]] = key;
    });
  }

  return new this.constructor(collection);
};
