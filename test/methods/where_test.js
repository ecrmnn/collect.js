'use strict';

const products = [
  { product: 'Desk', price: 200, manufacturer: 'IKEA' },
  { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
  { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
  { product: 'Door', price: '100' },
];

module.exports = (it, expect, collect) => {
  const collection = collect(products);

  it('should filter the collection by a given key/value pair', () => {
    const filtered = collection.where('price', 100);

    expect(filtered.all()).to.eql([
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
    ]);
    expect(collection.all()).to.eql(products);
  });

  it('should return everything that matches', () => {
    const filtered = collection.where('manufacturer', 'IKEA');

    expect(filtered.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    ]);
    expect(collection.all()).to.eql(products);
  });

  it('should accept a custom operator: less than', () => {
    const under200 = collection.where('price', '<', 150);

    expect(under200.all()).to.eql([
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
      { product: 'Door', price: '100' },
    ]);
  });

  it('should accept a custom operator: less than or equal to', () => {
    const overOrExactly150 = collection.where('price', '<=', 150);

    expect(overOrExactly150.all()).to.eql([
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
      { product: 'Door', price: '100' },
    ]);
  });

  it('should accept a custom operator: bigger than', () => {
    const over150 = collection.where('price', '>', 150);

    expect(over150.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
    ]);
  });

  it('should accept a custom operator: bigger than or equal to', () => {
    const overOrExactly150 = collection.where('price', '>=', 150);

    expect(overOrExactly150.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    ]);
  });

  it('should accept a custom operator: loosely equal', () => {
    const loosly100 = collection.where('price', '==', 100);

    expect(loosly100.all()).to.eql([
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
      { product: 'Door', price: '100' },
    ]);
  });

  it('should accept a custom operator: strictly not equal', () => {
    const not100 = collection.where('price', '!==', 100);

    expect(not100.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
      { product: 'Door', price: '100' },
    ]);
  });

  it('should accept a custom operator: loosely not equal', () => {
    const not200 = collection.where('price', '!=', 200);

    expect(not200.all()).to.eql([
      { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
      { product: 'Door', price: '100' },
    ]);

    const not100 = collection.where('price', '<>', 100);

    expect(not100.all()).to.eql([
      { product: 'Desk', price: 200, manufacturer: 'IKEA' },
      { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    ]);
  });

  it('should work when collection is an object', () => {
    const filtered = collect([
      { test: 1 },
      { test: 2 },
    ]).keyBy('test')
      .where('test', 2)
      .all();

    expect(filtered).to.eql([{ test: 2 }]);
  });

  it('should work with nested objects', () => {
    const collection2 = collect([
      { product: 'Desk', price: 200, foo: { bar: 1 } },
      { product: 'Chair', price: 100, foo: { bar: 2 } },
      { product: 'Bookcase', price: 150, foo: { bar: 2 } },
      { product: 'Door', price: 100, foo: { bar: 1 } },
    ]);

    const filtered = collection2.where('foo.bar', 1);

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
  });
};
