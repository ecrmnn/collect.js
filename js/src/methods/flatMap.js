'use strict';

module.exports = function flatMap(fn) {
  return this.map(fn).collapse();
};
