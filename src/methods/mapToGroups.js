'use strict';

module.exports = function mapToGroups(fn) {
  const collection = {};

  this.items.forEach((item) => {
    const [keyed, value] = fn(item);

    if (collection[keyed] === undefined) {
      collection[keyed] = [value];
    } else {
      collection[keyed].push(value);
    }
  });

  return new this.constructor(collection);
};
