'use strict';

module.exports = function sum(key) {
  return this.items.reduce(function(accumulator, current) {
    if (key === undefined) {
      return accumulator + current;
    } else if (typeof key === 'function') {
      return accumulator + key(current);
    } else {
      return accumulator + current[key];
    }
  }, 0);
};
