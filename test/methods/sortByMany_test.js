'use strict';

module.exports = (it, expect, collect) => {
  const data = [
    { name: 'Desk', price: 200 },
    { name: 'Chair', price: 100 },
    { name: 'Bookcase', price: 150 },
  ];

  it('should sort the collection by the given key', () => {
    const collection = collect(data);
    const sorted = collection.sortByMany(['price']);

    expect(sorted.all()).to.eql([
      { name: 'Chair', price: 100 },
      { name: 'Bookcase', price: 150 },
      { name: 'Desk', price: 200 },
    ]);
  });

  it('should not modify the collection', () => {
    const collection = collect(data);
    const sorted = collection.sortByMany(['price']);

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

    const sorted = collection.sortByMany([product => product.colors.length]);

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

  it('should sort strings before integers and integers before null', () => {
    const collection = collect([
      { order: '1971-11-13T23:00:00.000000Z' },
      { order: null },
      { order: 1 },
    ]);

    const sorted = collection.sortByMany(['order']);

    expect(sorted.all()).to.eql([
      { order: '1971-11-13T23:00:00.000000Z' },
      { order: 1 },
      { order: null },
    ]);
  });

  it('should sort strings before integers and integers before null', () => {
    const collection = collect([
      { order: '1' },
      { order: null },
      { order: 1 },
    ]);

    const sorted = collection.sortByMany(['order']);

    expect(sorted.all()).to.eql([
      { order: '1' },
      { order: 1 },
      { order: null },
    ]);
  });

  it('should sort the collection by 2nd criteria if first criteria has same value', () => {
    const collection = collect([
      { name: 'Desk', price: 200 },
      { name: 'Table', price: 200 },
      { name: 'Chair', price: 100 },
      { name: 'Bookcase', price: 150 },
    ]);

    const sorted = collection.sortByMany(['price', 'name']);

    expect(sorted.all()).to.eql([
      { name: 'Chair', price: 100 },
      { name: 'Bookcase', price: 150 },
      { name: 'Desk', price: 200 },
      { name: 'Table', price: 200 },
    ]);
  });

  it('should sort the collection by 2nd criteria function if first criteria function returns same value', () => {
    const collection = collect([
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Chair', colors: ['Black', 'Mahogany'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);

    const sorted = collection.sortByMany([
      product => product.colors.length,
      product => product.name,
    ]);

    expect(sorted.all()).to.eql([
      { name: 'Chair', colors: ['Black', 'Mahogany'] },
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);
  });

  it('should sort strings before integers and integers before null when using a callback function', () => {
    const collection = collect([
      { order: '1971-11-13T23:00:00.000000Z' },
      { order: null },
      { order: 1 },
    ]);

    const sorted = collection.sortByMany([item => item.order]);

    expect(sorted.all()).to.eql([
      { order: '1971-11-13T23:00:00.000000Z' },
      { order: 1 },
      { order: null },
    ]);
  });

  it('should sort nested data with dot notation', () => {
    const collection = collect([
      { nested: { data: '1971-11-13T23:00:00.000000Z' } },
      { nested: { data: null } },
      { nested: { data: 1 } },
    ]);

    const sorted = collection.sortByMany(['nested.data']);

    expect(sorted.all()).to.eql([
      { nested: { data: '1971-11-13T23:00:00.000000Z' } },
      { nested: { data: 1 } },
      { nested: { data: null } },
    ]);
  });
};