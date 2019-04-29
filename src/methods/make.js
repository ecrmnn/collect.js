'use strict';

module.exports = function make(items = []) {
  return new this.constructor(items);
};
