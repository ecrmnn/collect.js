'use strict';

module.exports = (it, expect, collect) => {
  it('should find duplicates in array', () => {
    const collection = collect([1, 2, 1, 'laravel', null, 'laravel', 'php', null]);

    expect(collection.duplicates().all()).to.eql({
      2: 1,
      5: 'laravel',
      7: null,
    });
  });

  it('should find duplicates in objects', () => {
    const collection = collect({
      name: 'Fabinho',
      nickname: 'Fabinho',
    });

    expect(collection.duplicates().all()).to.eql({
      nickname: 'Fabinho',
    });
  });

  it('should find duplicates in array with mixed primitives', () => {
    const collection = collect([
      2,
      2,
      ['collect.js'],
      ['collect.js'],
      collect([1, 2, 3]),
      collect([1, 2, 3]),
    ]);

    expect(collection.duplicates().all()).to.eql({
      1: 2,
      3: ['collect.js'],
      5: collect([1, 2, 3]),
    });
  });

  it('should not find duplicates when passing nothing', () => {
    const collection = collect();

    expect(collection.duplicates().all()).to.eql({});
  });

  it('should not find duplicates when passing an empty array', () => {
    const collection = collect([]);

    expect(collection.duplicates().all()).to.eql({});
  });

  it('should not find duplicates when passing null', () => {
    const collection = collect(null);

    expect(collection.duplicates().all()).to.eql({});
  });

  it('should not find duplicates when passing a string', () => {
    const collection = collect('this is my string');

    expect(collection.duplicates().all()).to.eql({});
  });
};
