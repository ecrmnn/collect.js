'use strict';

module.exports = function reduce(fn, carry) {
  let result = null;
  let reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  this.items.forEach((item) => {
    result = fn(reduceCarry, item);
    reduceCarry = result;
  });

  return result;
};
