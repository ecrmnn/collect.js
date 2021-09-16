'use strict';

var _require = require('../helpers/is'),
    isArray = _require.isArray,
    isObject = _require.isObject;

var deleteKeys = require('../helpers/deleteKeys');

module.exports = function shift() {
  var _this = this;

  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (this.isEmpty()) {
    return null;
  }

  if (isArray(this.items)) {
    if (count === 1) {
      return this.items.shift();
    }

    return new this.constructor(this.items.splice(0, count));
  }

  if (isObject(this.items)) {
    if (count === 1) {
      var key = Object.keys(this.items)[0];
      var value = this.items[key];
      delete this.items[key];

      return value;
    }

    var keys = Object.keys(this.items);
    var poppedKeys = keys.slice(0, count);

    var newObject = poppedKeys.reduce(function (acc, current) {
      acc[current] = _this.items[current];

      return acc;
    }, {});

    deleteKeys(this.items, poppedKeys);

    return new this.constructor(newObject);
  }

  return null;
};