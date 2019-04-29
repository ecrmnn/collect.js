'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function make() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!Array.isArray(items) && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object') {
    return new this.constructor([items]);
  } else if (items instanceof this.constructor) {
    return new this.constructor(items.all());
  }

  return new this.constructor(items);
};