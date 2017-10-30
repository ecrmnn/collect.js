'use strict';

module.exports = (it, expect, collect) => {
  it('should remove and return a slice of items starting at the specified index', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const chunk = collection.splice(2);
    expect(chunk.all()).to.eql([3, 4, 5]);
    expect(collection.all()).to.eql([1, 2]);

    const collection2 = collect([1, 2, 3, 4, 5]);
    const chunk2 = collection2.splice(2, 1, [10, 11]);
    expect(chunk2.all()).to.eql([3]);
    expect(collection2.all()).to.eql([1, 2, 10, 11, 4, 5]);
  });

  it('should modify the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const chunk = collection.splice(2, 1);
    expect(chunk.all()).to.eql([3]);
    expect(collection.all()).to.eql([1, 2, 4, 5]);
  });
};
