'use strict';

module.exports = function pull(key) {
  var value = this.items[key] || null;
  delete this.items[key];
  return value;
};