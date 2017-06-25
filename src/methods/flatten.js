'use strict';

module.exports = function flatten(depth) {
  let flattenDepth = depth || Infinity;

  let fullyFlattened = false;
  let collection = [];

  const flat = function flat(items) {
    collection = [];

    if (Array.isArray(items)) {
      items.forEach((item) => {
        if (typeof item === 'string') {
          collection.push(item);
        } else if (Array.isArray(item)) {
          collection = collection.concat(item);
        } else {
          Object.keys(item).forEach((property) => {
            collection = collection.concat(item[property]);
          });
        }
      });
    } else {
      Object.keys(items).forEach((property) => {
        if (typeof items[property] === 'string') {
          collection.push(items[property]);
        } else if (Array.isArray(items[property])) {
          collection = collection.concat(items[property]);
        } else {
          Object.keys(items).forEach((prop) => {
            collection = collection.concat(items[prop]);
          });
        }
      });
    }

    fullyFlattened = collection.filter(item => typeof item === 'object');
    fullyFlattened = fullyFlattened.length === 0;

    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};
