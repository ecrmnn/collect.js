'use strict';

module.exports = (it, expect, collect) => {
  it('should filter the collection by a given key / value not contained within the given array', () => {
    const data = [
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ];

    const collection = collect(data);

    const filtered = collection.whereNotIn('price', ['150', 200]);

    expect(filtered.all()).to.eql([
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ]);

    expect(collection.all()).to.eql(data);
  });
};
