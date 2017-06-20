'use strict';

module.exports = function every(fn) {
  for (let i = 0; i < this.items.length; i++) {
    if (!fn(this.items[i])) {
      return false;
    }
    return true;
  }
};
