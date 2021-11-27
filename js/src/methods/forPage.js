'use strict';

module.exports = function forPage(page, chunk) {
  let collection = {};

  if (Array.isArray(this.items)) {
    collection = this.items.slice((page * chunk) - chunk, page * chunk);
  } else {
    Object
      .keys(this.items)
      .slice((page * chunk) - chunk, page * chunk)
      .forEach((key) => {
        collection[key] = this.items[key];
      });
  }

  return new this.constructor(collection);
};
