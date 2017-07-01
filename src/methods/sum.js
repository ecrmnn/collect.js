'use strict';

module.exports = function sum(key) {
  let total = 0;

  if (key === undefined) {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      total += this.items[i];
    }
  } else if (typeof key === 'function') {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      total += key(this.items[i]);
    }
  } else {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      total += this.items[i][key];
    }
  }

  return total;
};
