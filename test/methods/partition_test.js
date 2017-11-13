'use strict';

module.exports = (it, expect, collect) => {
  it('should separate elements that pass a given truth test from those that do not', () => {
    const collection = collect([1, 2, 3, 4, 5, 6]);

    const arr = collection.partition(i => i < 3);

    expect(arr[0]).to.eql([1, 2]);
    expect(arr[1]).to.eql([3, 4, 5, 6]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6]);
  });
};
