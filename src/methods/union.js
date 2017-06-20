'use strict';

module.exports = function union(object) {
  const collection = Object.create(this.items);

  for (const prop in object) {
    if (!this.items.hasOwnProperty(prop)) {
      collection[prop] = object[prop];
    }
  }

  return new this.constructor(collection);
};
