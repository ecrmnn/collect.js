'use strict';

module.exports = (it, expect, collect) => {
  it('should remove all object where name is null', () => {
    const collection = collect([{
      name: 'Mohamed Salah',
    }, {
      name: null,
    }, {
      name: 'Sadio Mané',
    }]);

    expect(collection.whereNotNull('name').all()).to.eql([{
      name: 'Mohamed Salah',
    }, {
      name: 'Sadio Mané',
    }]);
  });

  it('should remove all values that are null', () => {
    const collection = collect([1, 2, null, 3, 4]);

    expect(collection.whereNotNull().all()).to.eql([1, 2, 3, 4]);
  });
};
