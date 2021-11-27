'use strict';

module.exports = function each(fn) {
  let stop = false;

  if (Array.isArray(this.items)) {
    const { length } = this.items;

    for (let index = 0; index < length && !stop; index += 1) {
      stop = fn(this.items[index], index, this.items) === false;
    }
  } else {
    const keys = Object.keys(this.items);
    const { length } = keys;

    for (let index = 0; index < length && !stop; index += 1) {
      const key = keys[index];

      stop = fn(this.items[key], key, this.items) === false;
    }
  }

  return this;
};
