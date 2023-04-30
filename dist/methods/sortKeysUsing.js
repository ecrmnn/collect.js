'use strict';

module.exports = function sortKeysUsing(callback) {
  var _this = this;
  if (Array.isArray(this.items)) {
    return this;
  }
  var ordered = {};
  Object.keys(this.items).sort(callback).forEach(function (key) {
    ordered[key] = _this.items[key];
  });
  return new this.constructor(ordered);
};