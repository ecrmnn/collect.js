'use strict';

const products = [
  { product: 'Desk', price: 200, manufacturer: 'IKEA' },
  { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
  { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
  { product: 'Door', price: '100' },
];

module.exports = (it, expect, collect) => {
  it('should return everything that matches within', () => {
    const collection = collect(products);
    const filtered = collection.whereIn('price', [100, 200]);

    expect(filtered.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
    ]);

    expect(collection.all()).to.eql(products);

    const filtered2 = collection.whereIn('manufacturer', ['IKEA']);

    expect(filtered2.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    ]);

    expect(collection.all()).to.eql(products);
  });

  it('should return everything that matches within given a collection', () => {
    const collection = collect(products);
    const filtered = collection.whereIn('price', collect([100, 200]));

    expect(filtered.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
    ]);

    expect(collection.all()).to.eql(products);

    const filtered2 = collection.whereIn('manufacturer', collect(['IKEA']));

    expect(filtered2.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    ]);

    expect(collection.all()).to.eql(products);
  });

  it('should work with nested objects', () => {
    const collection2 = collect([
      { product: 'Desk', price: 200, foo: { bar: 1 } },
      { product: 'Chair', price: 100, foo: { bar: 2 } },
      { product: 'Bookcase', price: 150, foo: { bar: 2 } },
      { product: 'Door', price: 100, foo: { bar: 1 } },
    ]);

    const filtered = collection2.whereIn('foo.bar', [1]);

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

    const filtered2 = collection2.whereIn('foo.bar', [1, 2]);
    expect(filtered2.all()).to.eql(collection2.all());

    const filtered3 = collection2.whereIn('foo.bar', [89]);
    expect(filtered3.all()).to.eql([]);
  });
};
