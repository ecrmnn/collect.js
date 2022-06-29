"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = push;

function push() {
  var _this$items;

  (_this$items = this.items).push.apply(_this$items, arguments);

  return this;
}