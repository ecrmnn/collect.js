'use strict';

const { isArray, isObject } = require('../helpers/is');

module.exports = function flatten(depth) {
  let flattenDepth = depth || Infinity;

  let fullyFlattened = false;
  let collection = [];

  const flat = function flat(items) {
    collection = [];

    if (isArray(items)) {
      items.forEach((item) => {
        if (isArray(item)) {
          collection = collection.concat(item);
        } else if (isObject(item)) {
          Object.keys(item).forEach((property) => {
            collection = collection.concat(item[property]);
          });
        } else {
          collection.push(item);
        }
      });
    } else {
      Object.keys(items).forEach((property) => {
        if (isArray(items[property])) {
          collection = collection.concat(items[property]);
        } else if (isObject(items[property])) {
          Object.keys(items).forEach((prop) => {
            collection = collection.concat(items[prop]);
          });
        } else {
          collection.push(items[property]);
        }
      });
    }

    fullyFlattened = collection.filter(item => isObject(item));
    fullyFlattened = fullyFlattened.length === 0;

    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};
