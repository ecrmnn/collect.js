'use strict';

module.exports = function mode(key) {
  let values = [];
  let highestCount = 1;

  if (!this.items.length) {
    return null;
  }

  this.items.forEach(function(item) {
    const _values = values.filter(function(value) {
      if (key !== undefined) {
        return value.key === item[key];
      }

      return value.key === item;
    });

    if (!_values.length) {
      if (key !== undefined) {
        values.push({ key: item[key], count: 1 });
      } else {
        values.push({ key: item, count: 1 });
      }
    } else {
      const count = ++_values[0].count;

      if (count > highestCount) {
        highestCount = count;
      }
    }
  });

  return values
    .filter(function(value) {
      return value.count === highestCount;
    })
    .map(function(value) {
      return value.key;
    });
};
