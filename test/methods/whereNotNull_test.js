'use strict';

module.exports = (it, expect, collect) => {
  it('should remove all object where name is null', () => {
    const collection = collect([{
      name: 'Mohamed Salah',
    }, {
      name: null,
    }, {
      name: 'Darwin Núñez',
    }]);

    expect(collection.whereNotNull('name').all()).to.eql([{
      name: 'Mohamed Salah',
    }, {
      name: 'Darwin Núñez',
    }]);
  });

  it('should remove all values that are null', () => {
    const collection = collect([1, 2, null, 3, 4]);

    expect(collection.whereNotNull().all()).to.eql([1, 2, 3, 4]);
  });
};
