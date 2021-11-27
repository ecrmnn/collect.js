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

  it('should filter the collection by a given key / value not contained within the given collection', () => {
    const data = [
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ];

    const collection = collect(data);

    const filtered = collection.whereNotIn('price', collect(['150', 200]));

    expect(filtered.all()).to.eql([
      { product: 'Chair', price: 100 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ]);

    expect(collection.all()).to.eql(data);
  });

  it('should work with nested objects', () => {
    const collection2 = collect([
      { product: 'Desk', price: 200, foo: { bar: 1 } },
      { product: 'Chair', price: 100, foo: { bar: 2 } },
      { product: 'Bookcase', price: 150, foo: { bar: 2 } },
      { product: 'Door', price: 100, foo: { bar: 1 } },
    ]);

    const filtered = collection2.whereNotIn('foo.bar', [2]);

    expect(filtered.all()).to.eql([{
      product: 'Desk',
      price: 200,
      foo: {
        bar: 1,
      },
    }, {
      product: 'Door',
      price: 100,
      foo: {
        bar: 1,
      },
    }]);

    const filtered2 = collection2.whereNotIn('foo.bar', [89]);
    expect(filtered2.all()).to.eql(collection2.all());
  });
};
