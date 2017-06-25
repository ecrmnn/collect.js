'use strict';

module.exports = function every(fn) {
  return this.items.map(function (item, index) {
    return fn(item, index);
  }).indexOf(false) === -1;
};