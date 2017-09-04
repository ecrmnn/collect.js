'use strict';

module.exports = function crossJoin(...values) {
  function join(collection, constructor, args) {
    let current = args[0];

    if (current instanceof constructor) {
      current = current.all();
    }

    const rest = args.slice(1);
    const last = !rest.length;
    let result = [];

    for (let i = 0; i < current.length; i += 1) {
      const collectionCopy = collection.slice();
      collectionCopy.push(current[i]);

      if (last) {
        result.push(collectionCopy);
      } else {
        result = result.concat(join(collectionCopy, constructor, rest));
      }
    }

    return result;
  }

  return new this.constructor(join([], this.constructor, [].concat([this.items], values)));
};
