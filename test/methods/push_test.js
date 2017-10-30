'use strict';

module.exports = (it, expect, collect) => {
  it('should append an item to the end of the collection', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(collection.push(5).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should modify the collection', () => {
    const collection = collect([1, 2, 3, 4]);
    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.push(5);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should work with spread operator', () => {
    const collection = collect([1, 2, 3, 4]);
    expect(collection.all()).to.eql([1, 2, 3, 4]);

    const values = [1, 2, 3, 4, 5];

    collection.push(...values);
    expect(collection.all()).to.eql([1, 2, 3, 4, 1, 2, 3, 4, 5]);
  });
};
