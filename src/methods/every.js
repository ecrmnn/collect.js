'use strict';

module.exports = function every(fn) {
  return this.items
    .map((item, index) => fn(item, index))
    .indexOf(false) === -1;
};
