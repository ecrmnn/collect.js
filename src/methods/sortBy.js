'use strict';

module.exports = function sortBy(valueOrFunction) {
  const collection = [].concat(this.items);

  if (typeof valueOrFunction === 'function') {
    collection.sort((a, b) => {
      if (valueOrFunction(a) < valueOrFunction(b)) return -1;
      if (valueOrFunction(a) > valueOrFunction(b)) return 1;

      return 0;
    });
  } else {
    collection.sort((a, b) => {
      if (a[valueOrFunction] < b[valueOrFunction]) return -1;
      if (a[valueOrFunction] > b[valueOrFunction]) return 1;

      return 0;
    });
  }

  return new this.constructor(collection);
};
