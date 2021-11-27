'use strict';

module.exports = function max(key) {
  if (typeof key === 'string') {
    const filtered = this.items.filter(item => item[key] !== undefined);

    return Math.max(...filtered.map(item => item[key]));
  }

  return Math.max(...this.items);
};
