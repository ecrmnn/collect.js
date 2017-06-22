'use strict';

module.exports = function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var collection = this.items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return item[key] === Number(comparisonValue) || item[key] === comparisonValue.toString();

      default:
      case '===':
        return item[key] === comparisonValue;

      case '!=':
      case '<>':
        return item[key] !== Number(comparisonValue) && item[key] !== comparisonValue.toString();

      case '!==':
        return item[key] !== comparisonValue;

      case '<':
        return item[key] < comparisonValue;

      case '<=':
        return item[key] <= comparisonValue;

      case '>':
        return item[key] > comparisonValue;

      case '>=':
        return item[key] >= comparisonValue;

    }
  });

  return new this.constructor(collection);
};