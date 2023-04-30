'use strict';

module.exports = (it, expect, collect) => {
  const callback = (a, b) => b.length - a.length;

  it('should sort the keys in the collection using a callback', () => {
    const collection = collect({
      orange: 100,
      strawberry: 200,
      peach: 300,
    });

    const sorted = collection.sortKeysUsing(callback).all();

    const expected = {
      strawberry: 200,
      orange: 100,
      peach: 300,
    };

    expect(JSON.stringify(sorted)).to.equal(JSON.stringify(expected));
  });

  it('should return the same collection if not an object literal', () => {
    expect(collect('foo').sortKeysUsing(callback).all()).to.eql(['foo']);
    expect(collect([1, 2, 3]).sortKeysUsing(callback).all()).to.eql([1, 2, 3]);
    expect(collect(null).sortKeysUsing(callback).all()).to.eql([]);
  });
};
