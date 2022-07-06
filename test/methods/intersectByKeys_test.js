'use strict';

module.exports = (it, expect, collect) => {
  it('should remove any keys from the original collection that '
    + 'are not present in the given array or collection', () => {
    const collection = collect({
      name: 'Darwin Núñez',
      number: 27,
    });

    const collection2 = collect({
      name: 'Luis Suarez',
      number: 9,
      club: 'FC Barcelona',
    });

    expect(collection.intersectByKeys({
      name: 'Steven Gerrard',
    }).all()).to.eql({
      name: 'Darwin Núñez',
    });

    expect(collection.intersectByKeys(collection2).all()).to.eql({
      name: 'Darwin Núñez',
      number: 27,
    });
  });
};
