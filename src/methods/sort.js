'use strict';

module.exports = function sort(fn) {
  const isArray = Array.isArray(this.items);
  const collection = Object.entries(this.items);

  if (fn === undefined) {
    if (this.every(item => typeof item === 'number')) {
      collection.sort((a, b) => a[1] - b[1]);
    } else {
      collection.sort((a, b) => a[1].toString().localeCompare(b[1].toString()));
    }
  } else {
    collection.sort((a, b) => fn(a[1], b[1]));
  }

  if (isArray) {
    return new this.constructor(collection.map(entry => entry[1]));
  }

  return new this.constructor(collection.map(entry => ({
    key: entry[0],
    value: entry[1],
  }))).pluck('value', 'key');
};
