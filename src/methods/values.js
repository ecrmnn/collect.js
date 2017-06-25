'use strict';

module.exports = function values() {
  const collection = [];

  Object.keys(this.items).forEach((property) => {
    collection.push(this.items[property]);
  });

  return new this.constructor(collection);
};
