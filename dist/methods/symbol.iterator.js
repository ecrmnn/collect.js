"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SymbolIterator;

function SymbolIterator() {
  var _this = this;

  var index = -1;
  return {
    next: function next() {
      index += 1;
      return {
        value: _this.items[index],
        done: index >= _this.items.length
      };
    }
  };
}