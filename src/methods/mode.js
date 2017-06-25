'use strict';

module.exports = function mode(key) {
  const values = [];
  let highestCount = 1;

  if (!this.items.length) {
    return null;
  }

  this.items.forEach((item) => {
    const tempValues = values.filter((value) => {
      if (key !== undefined) {
        return value.key === item[key];
      }

      return value.key === item;
    });

    if (!tempValues.length) {
      if (key !== undefined) {
        values.push({ key: item[key], count: 1 });
      } else {
        values.push({ key: item, count: 1 });
      }
    } else {
      tempValues[0].count += 1;
      const count = tempValues[0].count;

      if (count > highestCount) {
        highestCount = count;
      }
    }
  });

  return values
    .filter(value => value.count === highestCount)
    .map(value => value.key);
};
