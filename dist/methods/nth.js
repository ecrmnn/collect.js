"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nth;

var _values = _interopRequireDefault(require("../helpers/values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function nth(n) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var items = (0, _values["default"])(this.items);
  var collection = items.slice(offset).filter(function (item, index) {
    return index % n === 0;
  });
  return new this.constructor(collection);
}