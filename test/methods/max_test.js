'use strict';

module.exports = (it, expect, collect) => {
  it('should return the maximum value of a given key', () => {
    const collection = collect([{
      value: 10,
    }, {
      value: -13,
    }, {
      value: 12,
    }, {
      unicorn: false,
    }]);

    const max = collection.max('value');

    expect(max).to.eql(12);

    expect(collection.all()).to.eql([{
      value: 10,
    }, {
      value: -13,
    }, {
      value: 12,
    }, {
      unicorn: false,
    }]);
  });

  it('should return the maximum value in the collection', () => {
    const collection = collect([-1, -2345, 12, 11, 3]);
    const max = collection.max();

    expect(max).to.eql(12);

    expect(collection.all()).to.eql([-1, -2345, 12, 11, 3]);
  });
};
