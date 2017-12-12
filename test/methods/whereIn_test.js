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
};
