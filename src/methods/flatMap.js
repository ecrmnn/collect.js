'use strict';

module.exports = function flatMap(fn) {
  const values = [];

  for (const prop in this.items) {
    values.push(this.items[prop]);
  }

  const newValues = fn(values);

  const collection = {};

  Object.keys(this.items).map(function(value, index) {
    return (collection[value] = newValues[index]);
  });

  return new this.constructor(collection);
};
