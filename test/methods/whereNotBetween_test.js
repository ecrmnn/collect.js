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

    const filtered = collection.whereNotBetween('price', [100, 200]);

    expect(filtered.all()).to.eql([
      { product: 'Chair', price: 80 },
      { product: 'Pencil', price: 30 },
    ]);
  });

  it('should filter out values within given scope', () => {
    const collection = collect([{ v: 1 }, { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 }]);

    expect(collection.whereNotBetween('v', [2, 4]).all()).to.eql([
      { v: 1 },
    ]);

    expect(collection.whereNotBetween('v', [-1, 1]).all()).to.eql([
      { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 },
    ]);

    expect(collection.whereNotBetween('v', [3, 3]).all()).to.eql([
      { v: 1 }, { v: 2 }, { v: 4 },
    ]);
  });

  it('should not modify the existing collection', () => {
    const collection = collect([{ v: 1 }, { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 }]);

    expect(collection.whereNotBetween('v', [2, 4]).all()).to.eql([
      { v: 1 },
    ]);

    expect(collection.all()).to.eql([{ v: 1 }, { v: 2 }, { v: 3 }, { v: '3' }, { v: 4 }]);
  });
};
