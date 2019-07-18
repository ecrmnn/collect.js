'use strict';

module.exports = (it, expect, collect) => {
  it('should filter collection within a given range', () => {
    const collection = collect([
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 80 },
      { product: 'Bookcase', price: 150 },
      { product: 'Pencil', price: 30 },
      { product: 'Door', price: 100 },
    ]);

    const filtered = collection.whereBetween('price', [100, 200]);

    expect(filtered.all()).to.eql([
      { product: 'Desk', price: 200 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ]);
  });

  it('should not modify the existing collection', () => {
    const collection = collect([
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 80 },
      { product: 'Bookcase', price: 150 },
      { product: 'Pencil', price: 30 },
      { product: 'Door', price: 100 },
    ]);

    const filtered = collection.whereBetween('price', [100, 200]);

    expect(filtered.all()).to.eql([
      { product: 'Desk', price: 200 },
      { product: 'Bookcase', price: 150 },
      { product: 'Door', price: 100 },
    ]);

    expect(collection.all()).to.eql([
      { product: 'Desk', price: 200 },
      { product: 'Chair', price: 80 },
      { product: 'Bookcase', price: 150 },
      { product: 'Pencil', price: 30 },
      { product: 'Door', price: 100 },
    ]);
  });

  it('should work on different values', () => {
    const collection = collect([{ v: 1 }, { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 }]);

    expect(collection.whereBetween('v', [2, 4]).all()).to.eql([
      { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 },
    ]);

    expect(collection.whereBetween('v', [-1, 1]).all()).to.eql([
      { v: 1 },
    ]);

    expect(collection.whereBetween('v', [3, 3]).all()).to.eql([
      { v: 3 }, { v: '3' },
    ]);
  });
};
