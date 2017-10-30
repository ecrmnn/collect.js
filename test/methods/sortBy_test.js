'use strict';

module.exports = (it, expect, collect) => {
  const data = [
    { name: 'Desk', price: 200 },
    { name: 'Chair', price: 100 },
    { name: 'Bookcase', price: 150 },
  ];

  it('should sort the collection by the given key', () => {
    const collection = collect(data);
    const sorted = collection.sortBy('price');

    expect(sorted.all()).to.eql([
      { name: 'Chair', price: 100 },
      { name: 'Bookcase', price: 150 },
      { name: 'Desk', price: 200 },
    ]);
  });

  it('should not modify the collection', () => {
    const collection = collect(data);
    const sorted = collection.sortBy('price');

    expect(sorted.all()).to.eql([
      { name: 'Chair', price: 100 },
      { name: 'Bookcase', price: 150 },
      { name: 'Desk', price: 200 },
    ]);
    expect(collection.all()).to.eql(data);
  });

  it('should accept a custom sort function', () => {
    const collection = collect([
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Chair', colors: ['Black'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);

    const sorted = collection.sortBy(product => product.colors.length);

    expect(sorted.all()).to.eql([
      { name: 'Chair', colors: ['Black'] },
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);

    expect(collection.all()).to.eql([
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Chair', colors: ['Black'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);
  });
};
