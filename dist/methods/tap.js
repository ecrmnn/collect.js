'use strict';

module.exports = function tap(fn) {
  fn(this);
  return this;
};