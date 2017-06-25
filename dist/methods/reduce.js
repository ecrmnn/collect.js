'use strict';

module.exports = function reduce(fn, carry) {
  var result = null;
  var reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  this.items.forEach(function (item) {
    result = fn(reduceCarry, item);
    reduceCarry = result;
  });

  return result;
};