'use strict';

module.exports = function reduce(fn, carry) {
  let result = null;
  let reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  if (Array.isArray(this.items)) {
    this.items.forEach((item) => {
      result = fn(reduceCarry, item);
      reduceCarry = result;
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      result = fn(reduceCarry, this.items[key], key);
      reduceCarry = result;
    });
  }

  return result;
};
