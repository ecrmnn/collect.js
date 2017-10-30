'use strict';

module.exports = (it, expect, collect) => {
  it('should reverse the order of the collection items', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const reversed = collection.reverse();

    expect(reversed.all()).to.eql([5, 4, 3, 2, 1]);
  });

  it('should not modify the original collection', () => {
    const collection = collect(['a', 'b', 'c', 'd']);
    const reversed = collection.reverse();

    expect(reversed.all()).to.eql(['d', 'c', 'b', 'a']);
    expect(collection.all()).to.eql(['a', 'b', 'c', 'd']);
  });
};
