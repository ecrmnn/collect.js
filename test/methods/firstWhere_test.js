'use strict';

const products = [
  { product: 'Desk', price: 200, manufacturer: 'IKEA' },
  { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
  { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
  { product: 'Door', price: '100' },
];

module.exports = (it, expect, collect) => {
  it('should return the first item where it matches', () => {
    const collection = collect(products);

    expect(collection.firstWhere('manufacturer', 'IKEA').product).to.eql('Desk');
  });

  it('should return null when no matches', () => {
    const collection = collect(products);

    expect(collection.firstWhere('manufacturer', 'xoxo')).to.eql(null);
  });
};
