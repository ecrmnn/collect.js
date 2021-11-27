'use strict';

module.exports = function merge(value) {
  let arrayOrObject = value;

  if (typeof arrayOrObject === 'string') {
    arrayOrObject = [arrayOrObject];
  }

  if (Array.isArray(this.items) && Array.isArray(arrayOrObject)) {
    return new this.constructor(this.items.concat(arrayOrObject));
  }

  const collection = JSON.parse(JSON.stringify(this.items));

  Object.keys(arrayOrObject).forEach((key) => {
    collection[key] = arrayOrObject[key];
  });

  return new this.constructor(collection);
};
