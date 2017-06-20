'use strict';

module.exports = function collapse() {
  return new this.constructor([].concat.apply([], this.items));
};
