'use strict';

module.exports = function each(fn) {
  if (Array.isArray(this.items)) {
    this.items.forEach(fn);
  } else {
    Object.keys(this.items).forEach((key) => {
      fn(this.items[key], key, this.items);
    });
  }

  return this;
};
