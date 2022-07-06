"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shuffle;

var _values = _interopRequireDefault(require("../helpers/values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function shuffle() {
  var items = (0, _values["default"])(this.items);
  var j;
  var x;
  var i;

  for (i = items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = items[i - 1];
    items[i - 1] = items[j];
    items[j] = x;
  }

  this.items = items;
  return this;
}