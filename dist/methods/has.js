'use strict';

module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    for (var i = 0, length = this.items.length; i < length; i += 1) {
      if (this.items[i][key] !== undefined) {
        return true;
      }
    }
    return false;
  }

  return this.items[key] !== undefined;
};