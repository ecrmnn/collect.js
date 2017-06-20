'use strict';

module.exports = function reduce(fn, carry) {
  let result = null;
  let _carry = null;

  if (carry !== undefined) {
    _carry = carry;
  }

  this.items.forEach(function(item) {
    result = fn(_carry, item);
    _carry = result;
  });

  return result;
};
