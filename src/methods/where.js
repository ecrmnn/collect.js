'use strict';

const values = require('../helpers/values');
const nestedValue = require('../helpers/nestedValue');

module.exports = function where(key, operator, value) {
  let comparisonOperator = operator;
  let comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  const items = values(this.items);

  const collection = items.filter((item) => {
    switch (comparisonOperator) {
      case '==':
        return nestedValue(item, key) === Number(comparisonValue) ||
          nestedValue(item, key) === comparisonValue.toString();

      default:
      case '===':
        return nestedValue(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return nestedValue(item, key) !== Number(comparisonValue) &&
          nestedValue(item, key) !== comparisonValue.toString();

      case '!==':
        return nestedValue(item, key) !== comparisonValue;

      case '<':
        return nestedValue(item, key) < comparisonValue;

      case '<=':
        return nestedValue(item, key) <= comparisonValue;

      case '>':
        return nestedValue(item, key) > comparisonValue;

      case '>=':
        return nestedValue(item, key) >= comparisonValue;

    }
  });

  return new this.constructor(collection);
};
