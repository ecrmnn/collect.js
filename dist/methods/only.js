"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = only;

var _variadic = _interopRequireDefault(require("../helpers/variadic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function only() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = (0, _variadic["default"])(args);

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return properties.indexOf(item) !== -1;
    });

    return new this.constructor(_collection);
  }

  var collection = {};
  Object.keys(this.items).forEach(function (prop) {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = _this.items[prop];
    }
  });
  return new this.constructor(collection);
}