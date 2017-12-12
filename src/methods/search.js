'use strict';

module.exports = function search(valueOrFunction, strict) {
  let valueFn = valueOrFunction;

  if (typeof valueOrFunction === 'function') {
    valueFn = this.items.filter((value, key) => valueOrFunction(value, key))[0];
  }

  let index = false;

  if (Array.isArray(this.items)) {
    const itemKey = this.items.filter((item) => {
      if (strict === true) {
        return item === valueFn;
      }

      return item === Number(valueFn) || item === valueFn.toString();
    })[0];

    index = this.items.indexOf(itemKey);
  } else {
    return Object.keys(this.items).filter((prop) => {
      if (strict === true) {
        return this.items[prop] === valueFn;
      }

      return this.items[prop] === Number(valueFn) || this.items[prop] === valueFn.toString();
    })[0] || false;
  }

  if (index === -1) {
    return false;
  }

  return index;
};
