'use strict';

const values = require('../helpers/values');

function getNested(mainObject, path) {
  const separator = '.';

  try {
    return path
      .split(separator)
      .reduce((obj, property) => obj[property], mainObject);
  } catch (err) {
    return null;
  }
}

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
        return getNested(item, key) === Number(comparisonValue) ||
          getNested(item, key) === comparisonValue.toString();

      default:
      case '===':
        return getNested(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return getNested(item, key) !== Number(comparisonValue) &&
          getNested(item, key) !== comparisonValue.toString();

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
