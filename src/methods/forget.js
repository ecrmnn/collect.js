'use strict';

module.exports = function forget(key) {
  delete this.items[key];
  return this;
};
