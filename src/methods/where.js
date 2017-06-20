'use strict';

module.exports = function where(key, operator, value) {
  if (value === undefined) {
    value = operator;
    operator = '===';
  }

  return new this.constructor(
    this.items.filter(function(item) {
      switch (operator) {
        case '==':
          return item[key] == value;

        case '===':
          return item[key] === value;

        case '!=':
          return item[key] != value;

        case '!==':
          return item[key] !== value;

        case '<':
          return item[key] < value;

        case '<=':
          return item[key] <= value;

        case '>':
          return item[key] > value;

        case '>=':
          return item[key] >= value;
      }
    })
  );
};
