'use strict';

const clone = require('../helpers/clone');

module.exports = function concat(collectionOrArrayOrObject) {
  let list = collectionOrArrayOrObject;

  if (collectionOrArrayOrObject instanceof this.constructor) {
    list = collectionOrArrayOrObject.all();
  } else if (typeof collectionOrArrayOrObject === 'object') {
    list = [];
    Object.keys(collectionOrArrayOrObject).forEach((property) => {
      list.push(collectionOrArrayOrObject[property]);
    });
  }

  const collection = clone(this.items);

  list.forEach((item) => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(key => collection.push(item[key]));
    } else {
      collection.push(item);
    }
  });

  return new this.constructor(collection);
};
