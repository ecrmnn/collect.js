'use strict';

module.exports = function push(item) {
  this.items.push(item);

  return this;
};
