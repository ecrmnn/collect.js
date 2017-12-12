'use strict';

module.exports = (it, expect, collect) => {
  it('should sort the collection', () => {
    const collection = collect([5, 3, 1, 2, 10, 4]);
    const sorted = collection.sort();

    expect(sorted.all()).to.eql([1, 2, 3, 4, 5, 10]);
  });

  it('should not modify the collection', () => {
    const collection = collect([5, 3, 1, 2, 10, 4]);
    const sorted = collection.sort();

    expect(sorted.all()).to.eql([1, 2, 3, 4, 5, 10]);
    expect(collection.all()).to.eql([5, 3, 1, 2, 10, 4]);
  });

  it('should accept a custom sort function', () => {
    const collection = collect([5, 3, 1, 2, 4]);
    const sorted = collection.sort((a, b) => b - a);

    expect(sorted.all()).to.eql([5, 4, 3, 2, 1]);
    expect(collection.all()).to.eql([5, 3, 1, 2, 4]);
  });
};
