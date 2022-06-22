'use strict';

module.exports = function add(item) {
  this.items.push(item);
  return this;
};