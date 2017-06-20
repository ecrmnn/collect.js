'use strict';

module.exports = function values() {
  const collection = [];

  for (const prop in this.items) {
    collection.push(this.items[prop]);
  }

  return new this.constructor(collection);
};
