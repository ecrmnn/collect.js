'use strict';

/* eslint-disable eqeqeq */

const { isArray, isObject, isFunction } = require('../helpers/is');

module.exports = function search(valueOrFunction, strict) {
  let result;

  const find = (item, key) => {
    if (isFunction(valueOrFunction)) {
      return valueOrFunction(this.items[key], key);
    }

    if (strict) {
      return this.items[key] === valueOrFunction;
    }

    return this.items[key] == valueOrFunction;
  };

  if (isArray(this.items)) {
    result = this.items.findIndex(find);
  } else if (isObject(this.items)) {
    result = Object.keys(this.items).find(key => find(this.items[key], key));
  }

  if (result === undefined || result < 0) {
    return false;
  }

  return result;
};
