'use strict';

var _require = require('../helpers/is'),
    isArray = _require.isArray,
    isObject = _require.isObject;

var deleteKeys = require('../helpers/deleteKeys');

module.exports = function pop() {
  var _this = this;

  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  if (this.isEmpty()) {
    return null;
  }

  if (isArray(this.items)) {
    if (count === 1) {
      return this.items.pop();
    }

    return new this.constructor(this.items.splice(-count));
  }

  if (isObject(this.items)) {
    var keys = Object.keys(this.items);

    if (count === 1) {
      var key = keys[keys.length - 1];
      var last = this.items[key];

      deleteKeys(this.items, key);

      return last;
    }

    var poppedKeys = keys.slice(-count);

    var newObject = poppedKeys.reduce(function (acc, current) {
      acc[current] = _this.items[current];

      return acc;
    }, {});

    deleteKeys(this.items, poppedKeys);

    return new this.constructor(newObject);
  }

  return null;
};