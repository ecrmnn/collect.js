'use strict';

module.exports = function sortKeysDesc() {
  const ordered = {};

  Object.keys(this.items).sort().reverse().forEach((key) => {
    ordered[key] = this.items[key];
  });

  return new this.constructor(ordered);
};
