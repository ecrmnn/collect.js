'use strict';

var _require = require('../helpers/is'),
    isArray = _require.isArray,
    isObject = _require.isObject;

module.exports = function takeUntil(value) {
  var _this = this;

  var seen = false;
  var items = null;

  if (isArray(this.items)) {
    items = this.items.filter(function (v) {
      if (!seen) {
        seen = v === value;
      }

      return !seen;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (!seen) {
        seen = _this.items[key] === value;

        if (!seen) {
          acc[key] = _this.items[key];
        }
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};