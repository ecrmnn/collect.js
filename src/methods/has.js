'use strict';

module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    for (let i = 0, length = this.items.length; i < length; i++) {
      if (this.items[i].hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  }

  return this.items.hasOwnProperty(key);
};
