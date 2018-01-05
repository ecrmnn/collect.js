'use strict';

module.exports = (it, expect, collect) => {
  it('should return an array of unique items', () => {
    const collection1 = collect([1, 1, 1, 2, 3, 3]);
    expect(collection1.unique().all()).to.eql([1, 2, 3]);

    const collection2 = collect([1, 1, 1, 2, 3, 3, '3']);
    expect(collection2.unique().all()).to.eql([1, 2, 3, '3']);
  });

  it('should return an array of unique objects by key', () => {
    const collection = collect([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'iPhone 5', brand: 'Apple', type: 'phone', price: '999' },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 },
      { name: 'Galaxy S6', brand: 'Samsung', type: 'phone', price: 1999 },
      { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch', price: 999 },
    ]);

    const unique = collection.unique('price');

    expect(unique.all()).to.eql([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'iPhone 5', brand: 'Apple', type: 'phone', price: '999' },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 },
    ]);
  });

  it('should return an array of unique objects by callback', () => {
    const collection = collect([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'iPhone 5', brand: 'Apple', type: 'phone', price: '999' },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 },
      { name: 'Galaxy S6', brand: 'Samsung', type: 'phone', price: 1999 },
      { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch', price: 999 },
    ]);

    const unique = collection.unique(item => item.brand + item.price);

    expect(unique.all()).to.eql([
      { name: 'iPhone 6', brand: 'Apple', type: 'phone', price: 999 },
      { name: 'Apple Watch', brand: 'Apple', type: 'watch', price: 1999 },
      { name: 'Galaxy S6', brand: 'Samsung', type: 'phone', price: 1999 },
      { name: 'Galaxy Gear', brand: 'Samsung', type: 'watch', price: 999 },
    ]);
  });
};
