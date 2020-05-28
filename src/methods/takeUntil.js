'use strict';

const { isArray, isObject } = require('../helpers/is');

module.exports = function takeUntil(value) {
  let seen = false;
  let items = null;

  if (isArray(this.items)) {
    items = this.items.filter((v) => {
      if (!seen) {
        seen = v === value;
      }

      return !seen;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce((acc, key) => {
      if (!seen) {
        seen = this.items[key] === value;

        if (!seen) {
          acc[key] = this.items[key];
        }
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};
