'use strict';

module.exports = function reduce(fn, carry) {
  var _this = this;

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
    Object.keys(this.items).forEach(function (key) {
      result = fn(reduceCarry, _this.items[key], key);
      reduceCarry = result;
    });
  }

  return result;
};