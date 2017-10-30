'use strict';

module.exports = function pop() {
  if (Array.isArray(this.items)) {
    return this.items.pop();
  }

  const keys = Object.keys(this.items);
  const key = keys[keys.length - 1];
  const last = this.items[key];

  delete this.items[key];

  return last;
};
