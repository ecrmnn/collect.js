'use strict';

module.exports = function macro(name, fn) {
  this.constructor.prototype[name] = fn;
};