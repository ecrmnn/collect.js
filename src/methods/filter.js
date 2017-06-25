'use strict';

module.exports = function filter(func = false) {
  const filteredArray = [];
  for (let i = 0; i < this.items.length; i += 1) {
    const item = this.items[i];
    if (func) {
      if (func(item, i)) {
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
