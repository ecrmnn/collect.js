'use strict';

const values = require('../helpers/values');
const nestedValue = require('../helpers/nestedValue');
const operatorForWhere = require('../helpers/operatorForWhere');

module.exports = function where(key, operator, value) {
  let comparisonOperator = operator;
  let comparisonValue = value;

  const items = values(this.items);

  if (operator === undefined || operator === true) {
    return new this.constructor(items.filter(item => nestedValue(item, key)));
  }

  if (operator === false) {
    return new this.constructor(items.filter(item => !nestedValue(item, key)));
  }

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  const collection = items.filter(
    operatorForWhere(key, comparisonOperator, comparisonValue)
  );

  return new this.constructor(collection);
};
