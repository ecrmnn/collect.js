'use strict';

const { isArray, isObject, isFunction } = require('../helpers/is');

module.exports = function takeWhile(valueOrFunction) {
  let previous = null;
  let items;

  let callback = value => value === valueOrFunction;
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter((item) => {
      if (previous !== false) {
        previous = callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce((acc, key) => {
      if (previous !== false) {
        previous = callback(this.items[key]);
      }

      if (previous !== false) {
        acc[key] = this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};
