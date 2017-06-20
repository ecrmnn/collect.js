'use strict';

module.exports = function sort(fn) {
  const collection = [].concat(this.items);

  if (fn === undefined) {
    collection.sort();
  } else {
    collection.sort(fn);
  }

  return new this.constructor(collection);
};
