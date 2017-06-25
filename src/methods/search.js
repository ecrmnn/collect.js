'use strict';

module.exports = function search(valueOrFunction, strict) {
  let valueFn = valueOrFunction;

  if (typeof valueOrFunction === 'function') {
    valueFn = this.items.filter((value, key) => valueOrFunction(value, key))[0];
  }

  const itemKey = this.items.filter((item) => {
    if (strict === true) {
      return item === valueFn;
    }

    return item === Number(valueFn) || item === valueFn.toString();
  })[0];

  const index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};
