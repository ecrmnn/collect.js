'use strict';

module.exports = function transform(fn) {
  this.items = this.items.map(item => fn(item));

  return this;
};
