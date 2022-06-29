"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = whereIn;

var _values = _interopRequireDefault(require("../helpers/values"));

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function whereIn(key, values) {
  var items = (0, _values["default"])(values);
  var collection = this.items.filter(function (item) {
    return items.indexOf((0, _nestedValue["default"])(item, key)) !== -1;
  });
  return new this.constructor(collection);
}