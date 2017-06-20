'use strict';

module.exports = function random(length) {
  const randomItemFromArray = this.slice(0);
  randomItemFromArray.shuffle();

  if (length !== undefined || length === 1) {
    randomItemFromArray.items.splice(0, randomItemFromArray.items.length - length);

    return randomItemFromArray;
  }

  return this.items[0];
};
