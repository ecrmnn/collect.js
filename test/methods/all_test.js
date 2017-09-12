'use strict';

module.exports = (it, expect, collect) => {
  it('should return all items, simple array', () => {
    expect(collect([1, 2, 3, 4, 5]).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should return all items, array of objects', () => {
    const collection = [{
      foo: 'bar',
    }, {
      baz: 'qux',
    }];

    expect(collect(collection).all()).to.eql(collection);
  });
};
