'use strict';

module.exports = function mapToDictionary(fn) {
  const collection = {};

  this.items.forEach((item, k) => {
    const [key, value] = fn(item, k);

    if (collection[key] === undefined) {
      collection[key] = [value];
    } else {
      collection[key].push(value);
    }
  });

  return new this.constructor(collection);
};
