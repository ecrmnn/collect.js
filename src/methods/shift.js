'use strict';

module.exports = function shift() {
  if (Array.isArray(this.items) && this.items.length) {
    return this.items.shift();
  }

  if (Object.keys(this.items).length) {
    const key = Object.keys(this.items)[0];
    const value = this.items[key];
    delete this.items[key];

    return value;
  }

  return null;
};
