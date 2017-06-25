'use strict';

module.exports = function pipe(fn) {
  return fn(this);
};