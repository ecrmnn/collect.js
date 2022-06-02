'use strict';

module.exports = function sortKeysDesc() {
  var _this = this;

  var ordered = {};
  Object.keys(this.items).sort().reverse().forEach(function (key) {
    ordered[key] = _this.items[key];
  });
  return new this.constructor(ordered);
};