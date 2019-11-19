'use strict';

module.exports = function min(key) {
  if (key !== undefined) {
    const filtered = this.items.filter(item => item[key] !== undefined);

    return Math.min(...filtered.map(item => item[key]));
  }

  return Math.min(...this.items);
};
