'use strict';

module.exports = (it, expect, collect) => {
  it('should separate elements that pass a given truth test from those that do not', () => {
    const collection = collect([1, 2, 3, 4, 5, 6]);

    const arr = collection.partition(i => i < 3);

    expect(arr.all()).to.eql([
      collect([1, 2]),
      collect([3, 4, 5, 6]),
    ]);
    expect(arr.first().all()).to.eql([1, 2]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should also work when collection is based on an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
      number: 19,
      club: 'Liverpool FC',
    });

    const arr = collection.partition(v => typeof v === 'string');

    expect(arr.all()).to.eql([
      collect({
        name: 'Sadio Mané',
        club: 'Liverpool FC',
      }),
      collect({
        number: 19,
      }),
    ]);
  });
};
