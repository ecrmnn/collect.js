'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function filter(fn) {
  var func = fn || false;

  var filteredArray = [];
  for (var i = 0, length = this.items.length; i < length; i += 1) {
    var item = this.items[i];
    if (func) {
      if (func(item, i)) {
        filteredArray.push(item);
      }
    } else if (Array.isArray(item)) {
      if (item.length) {
        filteredArray.push(item);
      }
    } else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      if (Object.keys(item).length) {
        filteredArray.push(item);
      }
    } else if (item) {
      filteredArray.push(item);
    }
  }

  return new this.constructor(filteredArray);
};