"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whereNotBetween;

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function whereNotBetween(key, values) {
  return this.filter(function (item) {
    return (0, _nestedValue["default"])(item, key) < values[0] || (0, _nestedValue["default"])(item, key) > values[values.length - 1];
  });
}