module.exports = function search(valueOrFunction, strict) {
  if (typeof valueOrFunction === 'function') {
    valueOrFunction = this.items.filter(function(value, key) {
      return valueOrFunction(value, key);
    })[0];
  }

  const operators = {
    normal: function(a, b) {
      return a == b;
    },
    strict: function(a, b) {
      return a === b;
    },
  };

  const itemKey = this.items.filter(function(item, key) {
    if (strict === undefined) {
      if (operators.normal(item, valueOrFunction)) {
        return item;
      }
    } else {
      if (operators.strict(item, valueOrFunction)) {
        return item;
      }
    }
  })[0];

  const index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};
