'use strict';

module.exports = function mapToGroups(fn) {
  const collection = {};

  this.items.forEach((item, key) => {
    const [keyed, value] = fn(item, key);

    if (collection[keyed] === undefined) {
      collection[keyed] = [value];
    } else {
      collection[keyed].push(value);
    }
  });

  return new this.constructor(collection);
};
