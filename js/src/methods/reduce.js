'use strict';

module.exports = function reduce(fn, carry) {
  let reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  if (Array.isArray(this.items)) {
    this.items.forEach((item) => {
      reduceCarry = fn(reduceCarry, item);
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      reduceCarry = fn(reduceCarry, this.items[key], key);
    });
  }

  return reduceCarry;
};
