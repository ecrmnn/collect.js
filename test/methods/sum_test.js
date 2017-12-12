'use strict';

module.exports = (it, expect, collect) => {
  it('should return the sum of collection values', () => {
    expect(collect([1, 3, 3, 7]).sum()).to.eql(14);
    expect(collect([1, 3, 3, 7]).unique().sum()).to.eql(11);
  });

  it('should return the sum of collection values by key', () => {
    const collection = collect([
      { name: 'JavaScript The Good Parts', pages: 176 },
      { name: 'JavaScript The Definitive Guide', pages: 1096 },
    ]);

    expect(collection.sum('pages')).to.eql(1272);
  });

  it('should return the sum of the provided closure', () => {
    const collection = collect([
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Chair', colors: ['Black'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);

    const summed = collection.sum(product => product.colors.length);

    expect(summed).to.eql(6);

    expect(collection.all()).to.eql([
      { name: 'Desk', colors: ['Black', 'Mahogany'] },
      { name: 'Chair', colors: ['Black'] },
      { name: 'Bookcase', colors: ['Red', 'Beige', 'Brown'] },
    ]);
  });
};
