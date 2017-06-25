'use strict';

module.exports = function search(valueOrFunction, strict) {
  var valueFn = valueOrFunction;

  if (typeof valueOrFunction === 'function') {
    valueFn = this.items.filter(function (value, key) {
      return valueOrFunction(value, key);
    })[0];
  }

  var itemKey = this.items.filter(function (item) {
    if (strict === true) {
      return item === valueFn;
    }

    return item === Number(valueFn) || item === valueFn.toString();
  })[0];

  var index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};