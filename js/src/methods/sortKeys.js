'use strict';

module.exports = function sortKeys() {
  const ordered = {};

  Object.keys(this.items).sort().forEach((key) => {
    ordered[key] = this.items[key];
  });

  return new this.constructor(ordered);
};
