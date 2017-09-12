'use strict';

module.exports = (it, expect, collect) => {
  it('should return the matching values from collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const intersect = collection.intersect([1, 2, 3, 9]);

    expect(intersect.all()).to.eql([1, 2, 3]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should accept a collection as an argument', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const intersect = collection.intersect(collect([1, 2, 3, 9]));

    expect(intersect.all()).to.eql([1, 2, 3]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });
};
