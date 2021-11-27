'use strict';

module.exports = (it, expect, collect) => {
  it('should return a slice of the collection starting at the given index', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const slice = collection.slice(4);

    expect(slice.all()).to.eql([5, 6, 7, 8, 9, 10]);
  });

  it('should not modify the original collection', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const slice = collection.slice(4);

    expect(slice.all()).to.eql([5, 6, 7, 8, 9, 10]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should accept a max limit as the second argument', () => {
    const collection2 = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const slice2 = collection2.slice(4, 2);

    expect(slice2.all()).to.eql([5, 6]);
    expect(collection2.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
};
