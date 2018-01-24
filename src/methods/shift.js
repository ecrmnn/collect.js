'use strict';

module.exports = function shift() {
  if (Array.isArray(this.items)) {
    return this.items.shift();
  }

  const key = Object.keys(this.items)[0];
  const value = this.items[key] || null;
  delete this.items[key];

  return value;
};
