'use strict';

module.exports = function every(fn) {
  let index = 0;
  for (const item of this.items) {
    if (! fn(item, index++)) {
      return false;
    }
  }

  return true;
};
