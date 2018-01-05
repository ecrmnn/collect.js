'use strict';

module.exports = (it, expect, collect) => {
  it('should filter the collection by a given callback, ' +
    'filtering based on value', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filtered = collection.filter(item => item > 1);

    expect(filtered.all()).to.eql([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should filter the collection by a given callback, ' +
    'filtering based on value', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const filtered = collection.filter((item, key) => key > 3 && key < 7);

    expect(filtered.all()).to.eql([5, 6, 7]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const collection2 = collect({
      key: 'value',
      foo: 'bar',
    });
    const filtered2 = collection2.filter((item, key) => key === 'foo');

    expect(filtered2.all()).to.eql({ foo: 'bar' });
    expect(collection2.all()).to.eql({ key: 'value', foo: 'bar' });
  });

  it('should filter the collection removing "falsely" values ' +
    'if no call back is passed', () => {
    const collection = collect([
      0,
      1,
      2,
      null,
      3,
      4,
      undefined,
      5,
      6,
      7,
      [],
      8,
      9,
      {},
      [10],
    ]);
    const filtered = collection.filter();

    expect(filtered.all()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, [10]]);
    expect(collection.all())
      .to
      .eql([
        0,
        1,
        2,
        null,
        3,
        4,
        undefined,
        5,
        6,
        7,
        [],
        8,
        9,
        {},
        [10],
      ]);

    const collection2 = collect({
      falseKey: false,
      emptyArray: [],
      baz: 10,
      emptyObject: {},
      foo: 'bar',
      undefinedKey: undefined,
      notEmptyObject: { a: 1 },
      notEmptyArray: [''],
    });
    const filtered2 = collection2.filter();

    expect(filtered2.all()).to.eql({ baz: 10, foo: 'bar', notEmptyObject: { a: 1 }, notEmptyArray: [''] });
    expect(collection2.all()).to.eql({
      falseKey: false,
      emptyArray: [],
      baz: 10,
      emptyObject: {},
      foo: 'bar',
      undefinedKey: undefined,
      notEmptyObject: { a: 1 },
      notEmptyArray: [''],
    });
  });
};
