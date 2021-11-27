'use strict';

module.exports = function mergeRecursive(items) {
  const merge = (target, source) => {
    const merged = {};

    const mergedKeys = Object.keys(Object.assign({}, target, source));

    mergedKeys.forEach((key) => {
      if (target[key] === undefined && source[key] !== undefined) {
        merged[key] = source[key];
      } else if (target[key] !== undefined && source[key] === undefined) {
        merged[key] = target[key];
      } else if (target[key] !== undefined && source[key] !== undefined) {
        if (target[key] === source[key]) {
          merged[key] = target[key];
        } else if (
          (!Array.isArray(target[key]) && typeof target[key] === 'object')
          && (!Array.isArray(source[key]) && typeof source[key] === 'object')
        ) {
          merged[key] = merge(target[key], source[key]);
        } else {
          merged[key] = [].concat(target[key], source[key]);
        }
      }
    });

    return merged;
  };

  if (!items) {
    return this;
  }

  if (items.constructor.name === 'Collection') {
    return new this.constructor(merge(this.items, items.all()));
  }

  return new this.constructor(merge(this.items, items));
};
