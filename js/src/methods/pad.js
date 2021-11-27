'use strict';

const clone = require('../helpers/clone');

module.exports = function pad(size, value) {
  const abs = Math.abs(size);
  const count = this.count();

  if (abs <= count) {
    return this;
  }

  let diff = abs - count;
  const items = clone(this.items);
  const isArray = Array.isArray(this.items);
  const prepend = size < 0;

  for (let iterator = 0; iterator < diff;) {
    if (!isArray) {
      if (items[iterator] !== undefined) {
        diff += 1;
      } else {
        items[iterator] = value;
      }
    } else if (prepend) {
      items.unshift(value);
    } else {
      items.push(value);
    }

    iterator += 1;
  }

  return new this.constructor(items);
};
