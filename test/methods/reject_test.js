'use strict';

module.exports = (it, expect, collect) => {
  it('should filter the collection using the given callback. removing items that returns true in the callback', () => {
    const collection = collect([1, 2, 3, 4]);
    const filtered = collection.reject(value => value > 2);

    expect(filtered.all()).to.eql([1, 2]);
    expect(collection.all()).to.eql([1, 2, 3, 4]);
  });

  it('should not modify the collection', () => {
    const collection = collect([1, 2, 3, 4, 5, 6]);
    const filtered = collection.reject(value => value > 2);

    expect(filtered.all()).to.eql([1, 2]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should do the exact opposite of filter', () => {
    const collection = collect([1, 2, 3, 4]);
    const filter = collection.filter(value => value > 2);
    const reject = collection.reject(value => value > 2);

    expect(filter.all()).to.eql([3, 4]);
    expect(reject.all()).to.eql([1, 2]);
  });
};
