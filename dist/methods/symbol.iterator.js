'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function SymbolIterator() {
  var _this = this;

  if (Array.isArray(this.items)) {
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
  }if (_typeof(this.items) === 'object') {
    var keys = Object.keys(this.items);
    var _index = -1;

    return {
      next: function next() {
        _index += 1;

        return {
          value: _this.items[keys[_index]],
          done: _index >= keys.length
        };
      }
    };
  }
  throw new TypeError('Unknown item data type');
};