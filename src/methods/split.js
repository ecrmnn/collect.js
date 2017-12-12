'use strict';

module.exports = function split(numberOfGroups) {
  const itemsPerGroup = Math.round(this.items.length / numberOfGroups);

  const items = JSON.parse(JSON.stringify(this.items));
  const collection = [];

  for (let iterator = 0; iterator < numberOfGroups; iterator += 1) {
    collection.push(new this.constructor(items.splice(0, itemsPerGroup)));
  }

  return new this.constructor(collection);
};
