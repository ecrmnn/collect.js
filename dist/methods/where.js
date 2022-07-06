"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = where;

var _values = _interopRequireDefault(require("../helpers/values"));

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;
  var items = (0, _values["default"])(this.items);

  if (operator === undefined || operator === true) {
    return new this.constructor(items.filter(function (item) {
      return (0, _nestedValue["default"])(item, key);
    }));
  }

  if (operator === false) {
    return new this.constructor(items.filter(function (item) {
      return !(0, _nestedValue["default"])(item, key);
    }));
  }

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var collection = items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return (0, _nestedValue["default"])(item, key) === Number(comparisonValue) || (0, _nestedValue["default"])(item, key) === comparisonValue.toString();

      default:
      case '===':
        return (0, _nestedValue["default"])(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return (0, _nestedValue["default"])(item, key) !== Number(comparisonValue) && (0, _nestedValue["default"])(item, key) !== comparisonValue.toString();

      case '!==':
        return (0, _nestedValue["default"])(item, key) !== comparisonValue;

      case '<':
        return (0, _nestedValue["default"])(item, key) < comparisonValue;

      case '<=':
        return (0, _nestedValue["default"])(item, key) <= comparisonValue;

      case '>':
        return (0, _nestedValue["default"])(item, key) > comparisonValue;

      case '>=':
        return (0, _nestedValue["default"])(item, key) >= comparisonValue;
    }
  });
  return new this.constructor(collection);
}