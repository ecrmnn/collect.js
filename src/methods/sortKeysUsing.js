'use strict';

module.exports = function sortKeysUsing(callback) {
  if (Array.isArray(this.items)) {
    return this;
  }

  const ordered = {};

  Object.keys(this.items).sort(callback).forEach((key) => {
    ordered[key] = this.items[key];
  });

  return new this.constructor(ordered);
};
