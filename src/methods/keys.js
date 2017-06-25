'use strict';

module.exports = function keys() {
  if (Array.isArray(this.items)) {
    const collection = [];

    this.items.forEach((object) => {
      Object.keys(object).forEach((key) => {
        collection.push(key);
      });
    });

    return new this.constructor(collection).unique();
  }

  return new this.constructor(Object.keys(this.items));
};
