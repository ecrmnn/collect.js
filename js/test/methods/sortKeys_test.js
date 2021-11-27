'use strict';

module.exports = (it, expect, collect) => {
  it('should sort the keys in the collection', () => {
    const collection = collect({
      c: 3,
      b: 2,
      a: 1,
    });

    expect(collection.sortKeys().all()).to.eql({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  it('should return the same collection if not an object', () => {
    expect(collect('foo').all()).to.eql(['foo']);
    expect(collect([1, 2, 3]).all()).to.eql([1, 2, 3]);
    expect(collect(null).all()).to.eql([]);
  });
};
