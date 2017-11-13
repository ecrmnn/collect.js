'use strict';

module.exports = (it, expect, collect) => {
  it('should split a collection into the given number of groups', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.split(1)).to.eql([[1, 2, 3, 4, 5]]);
    expect(collection.split(2)).to.eql([[1, 2, 3], [4, 5]]);
    expect(collection.split(3)).to.eql([[1, 2], [3, 4], [5]]);
    expect(collection.split(6)).to.eql([[1], [2], [3], [4], [5], []]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
  });
};
