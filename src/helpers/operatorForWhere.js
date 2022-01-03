'use strict';

const nestedValue = require('../helpers/nestedValue');

/**
 * Get an operator checker callback.
 * 
 * @param key
 * @param operator 
 * @param value
 * @returns {Function}
 */
module.exports = function operatorForWhere(key, operator = null, value = null) {
  let comparisonOperator = operator;
  let comparisonValue = value;

  if (arguments.length === 1) {
    comparisonValue = true;
    comparisonOperator = '=';
  }

  if (arguments.length === 2) {
    comparisonValue = operator;
    comparisonOperator = '=';
  }

  return (item) => {
    switch (comparisonOperator) {
      case '==':
        return nestedValue(item, key) === Number(comparisonValue)
          || nestedValue(item, key) === comparisonValue.toString();

      default:
      case '===':
        return nestedValue(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return nestedValue(item, key) !== Number(comparisonValue)
          && nestedValue(item, key) !== comparisonValue.toString();

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
  };
};
