'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getValues = require('../helpers/values');

module.exports = function values() {
  var valuesRecursive = function valuesRecursive(items) {
    var extractedValues = getValues(items);

    if (items !== null && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object') {
      return extractedValues.map(function (item) {
        return valuesRecursive(item);
      });
    }

    return items;
  };

  return new this.constructor(valuesRecursive(this.items));
};