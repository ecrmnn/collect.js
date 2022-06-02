'use strict';

module.exports = function split(numberOfGroups) {
  var itemsPerGroup = Math.round(this.items.length / numberOfGroups);
  var items = JSON.parse(JSON.stringify(this.items));
  var collection = [];

  for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {
    collection.push(new this.constructor(items.splice(0, itemsPerGroup)));
  }

  return new this.constructor(collection);
};