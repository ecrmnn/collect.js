'use strict';

module.exports = function flatten(depth) {
  if (depth === undefined) {
    depth = Infinity;
  }

  let fullyFlattened = false;
  let collection = [];

  const flat = function(items) {
    collection = [];

    if (Array.isArray(items)) {
      items.forEach(function(item) {
        if (typeof item === 'string') {
          collection.push(item);
        } else if (Array.isArray(item)) {
          collection = collection.concat(item);
        } else {
          for (const prop in item) {
            collection = collection.concat(item[prop]);
          }
        }
      });
    } else {
      for (const prop in items) {
        if (typeof items[prop] === 'string') {
          collection.push(items[prop]);
        } else if (Array.isArray(items[prop])) {
          collection = collection.concat(items[prop]);
        } else {
          for (const prop in items) {
            collection = collection.concat(items[prop]);
          }
        }
      }
    }

    fullyFlattened =
      collection.filter(function(item) {
        return typeof item === 'object';
      }).length === 0;

    depth--;
  };

  flat(this.items);

  while (!fullyFlattened && depth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};
