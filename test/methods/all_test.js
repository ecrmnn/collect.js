'use strict';

module.exports = (it, expect, collect) => {
  it('should return all items, simple array', () => {
    expect(collect([1, 2, 3, 4, 5]).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should recursively return all items', () => {
    const collectionOfCollections = collect([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);

    expect(collectionOfCollections.all()).to.eql([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);
  });
};
