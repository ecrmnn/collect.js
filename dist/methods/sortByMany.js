'use strict';

var _require = require('../helpers/is'),
  isFunction = _require.isFunction;
var nestedValue = require('../helpers/nestedValue');
var getValue = function getValue(item, valueOrFunction) {
  if (isFunction(valueOrFunction)) {
    return valueOrFunction(item);
  }
  return nestedValue(item, valueOrFunction);
};
module.exports = function sortByMany() {
  var valuesOrFunctions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var collection = [].concat(this.items);
  collection.sort(function (a, b) {
    for (var index = 0; index < valuesOrFunctions.length; index += 1) {
      var criteria = valuesOrFunctions[index];
      var valueA = getValue(a, criteria);
      var valueB = getValue(b, criteria);
      if (valueA === null || valueA === undefined) {
        return 1;
      }
      if (valueB === null || valueB === undefined) {
        return -1;
      }
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
    }
    return 0;
  });
  return new this.constructor(collection);
};