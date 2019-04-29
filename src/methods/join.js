'use strict';

module.exports = function join(glue, finalGlue) {
  const collection = this.values();

  if (finalGlue === undefined) {
    return collection.implode(glue);
  }

  const count = collection.count();

  if (count === 0) {
    return '';
  }

  if (count === 1) {
    return collection.last();
  }

  const finalItem = collection.pop();

  return collection.implode(glue) + finalGlue + finalItem;
};
