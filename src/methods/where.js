module.exports = function where(key, operator, value) {
  let comparisonOperator = operator;
  let comparisonValue = value;

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  const collection = this.items.filter((item) => {
    switch (comparisonOperator) {
      case '==':
        return item[key] == comparisonValue;

      default:
      case '===':
        return item[key] === comparisonValue;

      case '!=':
      case '<>':
        return item[key] != comparisonValue;

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
