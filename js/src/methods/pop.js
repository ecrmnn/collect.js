'use strict';

const { isArray, isObject } = require('../helpers/is');
const deleteKeys = require('../helpers/deleteKeys');

module.exports = function pop(count = 1) {
  if (this.isEmpty()) {
    return null;
  }

  if (isArray(this.items)) {
    if (count === 1) {
      return this.items.pop();
    }

    return new this.constructor(this.items.splice(-count));
  }

  if (isObject(this.items)) {
    const keys = Object.keys(this.items);

    if (count === 1) {
      const key = keys[keys.length - 1];
      const last = this.items[key];

      deleteKeys(this.items, key);

      return last;
    }

    const poppedKeys = keys.slice(-count);

    const newObject = poppedKeys.reduce((acc, current) => {
      acc[current] = this.items[current];

      return acc;
    }, {});

    deleteKeys(this.items, poppedKeys);

    return new this.constructor(newObject);
  }

  return null;
};
