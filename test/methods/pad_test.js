'use strict';

module.exports = (it, expect, collect) => {
  it('should pad the collection to the specified length with a value', () => {
    const collection = collect({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
    });

    const filtered = collection.pad(5, 9);

    expect(filtered.all()).to.eql({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 9,
      1: 9,
    });
  });

  it('should stay the same if the size is equal to the length of the collection', () => {
    const collection = collect({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
    });

    const filtered = collection.pad(3, 999999);

    expect(filtered.all()).to.eql({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
    });
  });

  it('should not override numeric keys', () => {
    const collection = collect({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 'ddd',
      2: 'eee',
    });

    const filtered = collection.pad(7, 'xoxo');

    expect(filtered.all()).to.eql({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 'ddd',
      1: 'xoxo',
      2: 'eee',
      3: 'xoxo',
    });
  });

  it('should not modify collection', () => {
    const collection = collect({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 'ddd',
      2: 'eee',
    });

    const filtered = collection.pad(6, 'xoxo');

    expect(filtered.all()).to.eql({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 'ddd',
      1: 'xoxo',
      2: 'eee',
    });

    expect(collection.all()).to.eql({
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      0: 'ddd',
      2: 'eee',
    });
  });

  it('should pad when based on plain array', () => {
    const collection = collect([1, 2, 3]);
    const filtered = collection.pad(6, 'xoxo');

    expect(filtered.all()).to.eql([1, 2, 3, 'xoxo', 'xoxo', 'xoxo']);
    expect(collection.all()).to.eql([1, 2, 3]);
  });

  it('should prepend when passing a negative size', () => {
    const collection = collect([1, 2, 3]);
    const filtered = collection.pad(-5, 5);

    expect(filtered.all()).to.eql([5, 5, 1, 2, 3]);
    expect(collection.all()).to.eql([1, 2, 3]);
  });
};
