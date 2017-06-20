'use strict';

module.exports = function sort(fn) {
  const collection = [].concat(this.items);

  if (fn === undefined) {
    if (this.every(item => typeof item === 'number')) {
      collection.sort((a, b) => a - b);
    } else {
      collection.sort();
    }
  } else {
    collection.sort(fn);
  }

  return new this.constructor(collection);
};
