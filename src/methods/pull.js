'use strict';

module.exports = function pull(key) {
  const value = this.items[key] || null;
  delete this.items[key];
  return value;
};
