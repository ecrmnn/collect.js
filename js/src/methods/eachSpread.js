'use strict';

module.exports = function eachSpread(fn) {
  this.each((values, key) => {
    fn(...values, key);
  });

  return this;
};
