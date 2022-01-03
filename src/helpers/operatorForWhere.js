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
    if (arguments.length === 1) {
        value = true;
        operator = '=';
    }

    if (arguments.length === 2) {
        value = operator;

        operator = '=';
    }

    return (item) => {
        switch (operator) {
          case '==':
            return nestedValue(item, key) === Number(value)
              || nestedValue(item, key) === value.toString();
    
          default:
          case '===':
            return nestedValue(item, key) === value;
    
          case '!=':
          case '<>':
            return nestedValue(item, key) !== Number(value)
              && nestedValue(item, key) !== value.toString();
    
          case '!==':
            return nestedValue(item, key) !== value;
    
          case '<':
            return nestedValue(item, key) < value;
    
          case '<=':
            return nestedValue(item, key) <= value;
    
          case '>':
            return nestedValue(item, key) > value;
    
          case '>=':
            return nestedValue(item, key) >= value;
        }
    };
};
