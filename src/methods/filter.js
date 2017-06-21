'use strict';

module.exports = function filter(fn) {
  fn = fn || false;

  const filteredArray = [];
  for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i];
    if (fn) {
      if (fn(item, i)) {
        filteredArray.push(item);
      }
    } else if (Array.isArray(item)) {
      if (item.length) {
        filteredArray.push(item);
      }
    } else if (item !== undefined && item !== null &&
        typeof item === 'object') {
      if (Object.keys(item).length) {
        filteredArray.push(item);
      }
    } else if (item) {
      filteredArray.push(item);
    }
  }

  return new this.constructor(filteredArray);
};
