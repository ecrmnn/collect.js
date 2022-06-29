"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = random;

var _values = _interopRequireDefault(require("../helpers/values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var items = (0, _values["default"])(this.items);
  var collection = new this.constructor(items).shuffle(); // If not a length was specified

  if (length !== parseInt(length, 10)) {
    return collection.first();
  }

  return collection.take(length);
}