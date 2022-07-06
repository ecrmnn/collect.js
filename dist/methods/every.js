"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = every;

var _values = _interopRequireDefault(require("../helpers/values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function every(fn) {
  var items = (0, _values["default"])(this.items);
  return items.every(fn);
}