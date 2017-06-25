'use strict';

module.exports = function sum(key) {
  return this.items.reduce((accumulator, current) => {
    if (key === undefined) {
      return accumulator + current;
    } else if (typeof key === 'function') {
      return accumulator + key(current);
    }

    return accumulator + current[key];
  }, 0);
};
