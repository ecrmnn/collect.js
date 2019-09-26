'use strict';

module.exports = function each(fn) {
  let stop = false;

  if (Array.isArray(this.items)) {
    const { length } = this.items;

    for (let i = 0; i < length && !stop; i++) {
      stop = fn(this.items[i], i, this.items) === false;
    }
  } else {
    const keys = Object.keys(this.items);
    const { length } = keys;

    for (let i = 0; i < length && !stop; i++) {
      const key = keys[i];

      stop = fn(this.items[key], key, this.items) === false;
    }
  }

  return this;
};
