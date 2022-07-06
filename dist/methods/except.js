"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = except;

var _variadic = _interopRequireDefault(require("../helpers/variadic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function except() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = (0, _variadic["default"])(args);

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return properties.indexOf(item) === -1;
    });

    return new this.constructor(_collection);
  }

  var collection = {};
  Object.keys(this.items).forEach(function (property) {
    if (properties.indexOf(property) === -1) {
      collection[property] = _this.items[property];
    }
  });
  return new this.constructor(collection);
}