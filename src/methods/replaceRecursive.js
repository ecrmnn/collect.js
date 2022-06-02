'use strict';

module.exports = function replaceRecursive(items) {
  const replace = (target, source) => {
    const replaced = { ...target };

    const mergedKeys = Object.keys({ ...target, ...source });

    mergedKeys.forEach((key) => {
      if (!Array.isArray(source[key]) && typeof source[key] === 'object') {
        replaced[key] = replace(target[key], source[key]);
      } else if (target[key] === undefined && source[key] !== undefined) {
        if (typeof target[key] === 'object') {
          replaced[key] = { ...source[key] };
        } else {
          replaced[key] = source[key];
        }
      } else if (target[key] !== undefined && source[key] === undefined) {
        if (typeof target[key] === 'object') {
          replaced[key] = { ...target[key] };
        } else {
          replaced[key] = target[key];
        }
      } else if (target[key] !== undefined && source[key] !== undefined) {
        if (typeof source[key] === 'object') {
          replaced[key] = { ...source[key] };
        } else {
          replaced[key] = source[key];
        }
      }
    });

    return replaced;
  };

  if (!items) {
    return this;
  }

  if (!Array.isArray(items) && typeof items !== 'object') {
    return new this.constructor(replace(this.items, [items]));
  }

  if (items.constructor.name === 'Collection') {
    return new this.constructor(replace(this.items, items.all()));
  }

  return new this.constructor(replace(this.items, items));
};
