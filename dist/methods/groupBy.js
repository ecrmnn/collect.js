"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = groupBy;

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

var _is = require("../helpers/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function groupBy(key) {
  var _this = this;

  var collection = {};
  this.items.forEach(function (item, index) {
    var resolvedKey;

    if ((0, _is.isFunction)(key)) {
      resolvedKey = key(item, index);
    } else if ((0, _nestedValue["default"])(item, key) || (0, _nestedValue["default"])(item, key) === 0) {
      resolvedKey = (0, _nestedValue["default"])(item, key);
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new _this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });
  return new this.constructor(collection);
}