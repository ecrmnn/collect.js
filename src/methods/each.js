'use strict';

module.exports = function each(fn) {
  let stop = false;

  if (Array.isArray(this.items)) {
    this.items.forEach((item, key, array) => {
      if (!stop) {
        const output = fn(item, key, array);

        if (output === false) {
          stop = true;
        }
      }
    });
  } else {
    Object.keys(this.items).forEach((key) => {
      if (!stop) {
        const output = fn(this.items[key], key, this.items);

        if (output === false) {
          stop = true;
        }
      }
    });
  }

  return this;
};
