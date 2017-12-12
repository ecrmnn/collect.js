'use strict';

module.exports = function push(...items) {
  this.items.push(...items);

  return this;
};
