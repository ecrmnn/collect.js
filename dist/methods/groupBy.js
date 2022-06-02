'use strict';

var nestedValue = require('../helpers/nestedValue');

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

module.exports = function groupBy(key) {
  var _this = this;

  var collection = {};
  this.items.forEach(function (item, index) {
    var resolvedKey;

    if (isFunction(key)) {
      resolvedKey = key(item, index);
    } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
      resolvedKey = nestedValue(item, key);
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new _this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });
  return new this.constructor(collection);
};