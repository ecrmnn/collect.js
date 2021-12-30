'use strict';

module.exports = function firstOr(fn) {
  return this.first(null, fn) || null;
};
