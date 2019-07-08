'use strict';

module.exports = function median(key) {
  const { length } = this.items;

  if (key === undefined) {
    if (length % 2 === 0) {
      return (this.items[(length / 2) - 1] + this.items[length / 2]) / 2;
    }

    return this.items[Math.floor(length / 2)];
  }

  if (length % 2 === 0) {
    return (this.items[(length / 2) - 1][key]
      + this.items[length / 2][key]) / 2;
  }

  return this.items[Math.floor(length / 2)][key];
};
