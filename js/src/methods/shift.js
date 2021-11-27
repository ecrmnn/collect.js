'use strict';

const { isArray, isObject } = require('../helpers/is');
const deleteKeys = require('../helpers/deleteKeys');

module.exports = function shift(count = 1) {
  if (this.isEmpty()) {
    return null;
  }

  if (isArray(this.items)) {
    if (count === 1) {
      return this.items.shift();
    }

    return new this.constructor(this.items.splice(0, count));
  }

  if (isObject(this.items)) {
    if (count === 1) {
      const key = Object.keys(this.items)[0];
      const value = this.items[key];
      delete this.items[key];

      return value;
    }

    const keys = Object.keys(this.items);
    const poppedKeys = keys.slice(0, count);

    const newObject = poppedKeys.reduce((acc, current) => {
      acc[current] = this.items[current];

      return acc;
    }, {});

    deleteKeys(this.items, poppedKeys);

    return new this.constructor(newObject);
  }

  return null;
};
