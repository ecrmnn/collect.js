'use strict';

var values = require('../helpers/values');

function getNested(mainObject, path) {
  var separator = '.';

  try {
    return path.split(separator).reduce(function (obj, property) {
      return obj[property];
    }, mainObject);
  } catch (err) {
    return null;
  }
}

module.exports = function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var items = values(this.items);

  var collection = items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return getNested(item, key) === Number(comparisonValue) || getNested(item, key) === comparisonValue.toString();

      default:
      case '===':
        return getNested(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return getNested(item, key) !== Number(comparisonValue) && getNested(item, key) !== comparisonValue.toString();

      case '!==':
        return getNested(item, key) !== comparisonValue;

      case '<':
        return getNested(item, key) < comparisonValue;

      case '<=':
        return getNested(item, key) <= comparisonValue;

      case '>':
        return getNested(item, key) > comparisonValue;

      case '>=':
        return getNested(item, key) >= comparisonValue;

    }
  });

  return new this.constructor(collection);
};