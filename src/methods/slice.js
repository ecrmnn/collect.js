'use strict';

module.exports = function slice(remove, limit) {
  let collection = this.items.slice(remove);

  if (limit !== undefined) {
    collection = collection.slice(0, limit);
  }

  return new this.constructor(collection);
};
