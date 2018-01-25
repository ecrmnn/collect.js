'use strict';

module.exports = function reduce(fn, carry) {
  var result = null;
  var reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      result = fn(reduceCarry, item);
      reduceCarry = result;
    });
  } else {
    var items = this.items;
    Object.keys(items).forEach(function (key) {
      result = fn(reduceCarry, items[key], key);
      reduceCarry = result;
    });
  }

  return result;
};