'use strict';

module.exports = function take(length) {
  if (!Array.isArray(this.items) && typeof this.items === 'object') {
    const keys = Object.keys(this.items);
    let slicedKeys;

    if (length < 0) {
      slicedKeys = keys.slice(length);
    } else {
      slicedKeys = keys.slice(0, length);
    }

    const collection = {};

    keys.forEach((prop) => {
      if (slicedKeys.indexOf(prop) !== -1) {
        collection[prop] = this.items[prop];
      }
    });

    return new this.constructor(collection);
  }

  if (length < 0) {
    return new this.constructor(this.items.slice(length));
  }

  return new this.constructor(this.items.slice(0, length));
};
