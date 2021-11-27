'use strict';

const { isObject } = require('../helpers/is');

module.exports = function skip(number) {
  if (isObject(this.items)) {
    return new this.constructor(
      Object.keys(this.items)
        .reduce((accumulator, key, index) => {
          if ((index + 1) > number) {
            accumulator[key] = this.items[key];
          }

          return accumulator;
        }, {}),
    );
  }

  return new this.constructor(this.items.slice(number));
};
