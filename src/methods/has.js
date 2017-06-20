'use strict';

module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  return this.items.hasOwnProperty(key);
};
