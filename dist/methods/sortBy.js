"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sortBy;

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

var _is = require("../helpers/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sortBy(valueOrFunction) {
  var collection = [].concat(this.items);

  var getValue = function getValue(item) {
    if ((0, _is.isFunction)(valueOrFunction)) {
      return valueOrFunction(item);
    }

    return (0, _nestedValue["default"])(item, valueOrFunction);
  };

  collection.sort(function (a, b) {
    var valueA = getValue(a);
    var valueB = getValue(b);

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

    return 0;
  });
  return new this.constructor(collection);
}