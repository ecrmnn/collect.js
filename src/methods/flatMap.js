'use strict';

module.exports = function flatMap(fn) {
  const values = [];

  Object.keys(this.items).forEach((property) => {
    values.push(this.items[property]);
  });

  const newValues = fn(values);

  const collection = {};

  Object.keys(this.items).forEach((value, index) => {
    collection[value] = newValues[index];
  });

  return new this.constructor(collection);
};
