'use strict';

module.exports = function merge(objectOrArray) {
  if (Array.isArray(objectOrArray)) {
    return new this.constructor(this.items.concat(objectOrArray));
  }

  const collection = JSON.parse(JSON.stringify(this.items));

  Object.keys(objectOrArray).forEach((key) => {
    collection[key] = objectOrArray[key];
  });

  return new this.constructor(collection);
};
