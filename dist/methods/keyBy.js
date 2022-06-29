"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keyBy;

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

var _is = require("../helpers/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function keyBy(key) {
  var collection = {};

  if ((0, _is.isFunction)(key)) {
    this.items.forEach(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      var keyValue = (0, _nestedValue["default"])(item, key);
      collection[keyValue || ''] = item;
    });
  }

  return new this.constructor(collection);
}