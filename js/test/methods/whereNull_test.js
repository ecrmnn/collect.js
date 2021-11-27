'use strict';

module.exports = (it, expect, collect) => {
  it('should remove all object where name is not null', () => {
    const collection = collect([{
      name: 'Mohamed Salah',
    }, {
      name: null,
    }, {
      name: 'Sadio Mané',
    }]);

    expect(collection.whereNull('name').all()).to.eql([{ name: null }]);
  });

  it('should remove all values that are not null', () => {
    const collection = collect([1, 2, null, 3, 4]);

    expect(collection.whereNull().all()).to.eql([null]);
  });
};
