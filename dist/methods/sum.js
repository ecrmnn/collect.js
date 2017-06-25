'use strict';

module.exports = function sum(key) {
  var total = 0;

  if (key === undefined) {
    for (var i = 0; i < this.items.length; i += 1) {
      total += this.items[i];
    }
  } else if (typeof key === 'function') {
    for (var _i = 0; _i < this.items.length; _i += 1) {
      total += key(this.items[_i]);
    }
  } else {
    for (var _i2 = 0; _i2 < this.items.length; _i2 += 1) {
      total += this.items[_i2][key];
    }
  }

  return total;
};