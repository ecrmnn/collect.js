'use strict';

const nestedValue = require('../helpers/nestedValue');
const { isFunction } = require('../helpers/is');

module.exports = function groupBy(key) {
  const collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach((item, index) => {
      let resolvedKey;

      if (isFunction(key)) {
        resolvedKey = key(item, index);
      } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
        resolvedKey = nestedValue(item, key);
      } else {
        resolvedKey = '';
      }

      if (collection[resolvedKey] === undefined) {
        collection[resolvedKey] = new this.constructor([]);
      }

      collection[resolvedKey].push(item);
    });
  } else {
    Object.keys(this.items).forEach((index) => {
      let resolvedKey;

      if (isFunction(key)) {
        resolvedKey = key(this.items[index], index);
      } else if (nestedValue(this.items[index], key) || nestedValue(this.items[index], key) === 0) {
        resolvedKey = nestedValue(this.items[index], key);
      } else {
        resolvedKey = '';
      }

      if (collection[resolvedKey] === undefined) {
        collection[resolvedKey] = new this.constructor([]);
      }

      collection[resolvedKey].push(this.items[index]);
    });
  }

  return new this.constructor(collection);
};
