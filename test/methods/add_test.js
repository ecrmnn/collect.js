'use strict';

module.exports = (it, expect, collect) => {
  it('should append an item to the end of the collection', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(collection.add(5).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should modify the collection', () => {
    const collection = collect([1, 2, 3, 4]);
    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.add(5);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });
};
