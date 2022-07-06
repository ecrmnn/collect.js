"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = has;

var _variadic = _interopRequireDefault(require("../helpers/variadic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function has() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = (0, _variadic["default"])(args);
  return properties.filter(function (key) {
    return Object.hasOwnProperty.call(_this.items, key);
  }).length === properties.length;
}