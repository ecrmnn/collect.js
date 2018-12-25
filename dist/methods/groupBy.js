'use strict';

module.exports = function groupBy(key) {
  var _this = this;

  var collection = {};

  this.items.forEach(function (item, index) {
    var resolvedKey = void 0;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else if (item[key] || item[key] === 0) {
      resolvedKey = item[key];
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new _this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};