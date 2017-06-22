module.exports = function search(valueOrFunction, strict) {
  let valueFn = valueOrFunction;

  if (typeof valueOrFunction === 'function') {
    valueFn = this.items.filter((value, key) => valueOrFunction(value, key))[0];
  }

  const operators = {
    normal(a, b) {
      return a == b;
    },

    strict(a, b) {
      return a === b;
    },
  };

  const itemKey = this.items.filter((item) => {
    if (strict === undefined) {
      return operators.normal(item, valueFn);
    }

    return operators.strict(item, valueFn);
  })[0];

  const index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};
