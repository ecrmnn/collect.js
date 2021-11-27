'use strict';

module.exports = (it, expect, collect) => {
  it('doesnt replace anything when passing null', () => {
    const data = [1, 2, 3];
    const collection = collect(data);

    expect(collection.replace(null).all()).to.eql([1, 2, 3]);
    expect(collection.all()).to.eql(data);
  });

  it('can replace values', () => {
    const data = ['a', 'b', 'c'];
    const collection = collect(data);
    const replaced = collection.replace({
      1: 'd',
      2: 'e',
    });

    expect(replaced.all()).to.eql({
      0: 'a',
      1: 'd',
      2: 'e',
    });

    expect(collection.all()).to.eql(data);
  });

  it('can replace with an array', () => {
    const data = ['a', 'b', 'c'];
    const collection = collect(data);
    const replaced = collection.replace([1, 2]);

    expect(replaced.all()).to.eql([1, 2, 'c']);
    expect(collection.all()).to.eql(data);
  });

  it('can replace with an object', () => {
    const data = {
      name: 'Bob',
    };

    const collection = collect(data);
    const replaced = collection.replace({
      0: 9,
      name: 'John',
    });

    expect(replaced.all()).to.eql({
      0: 9,
      name: 'John',
    });

    expect(collection.all()).to.eql(data);
  });

  it('can replace with a collection', () => {
    const data = {
      name: 'Bob',
    };

    const collection = collect(data);
    const replaced = collection.replace(collect({
      0: 9,
      name: 'John',
    }));

    expect(replaced.all()).to.eql({
      0: 9,
      name: 'John',
    });

    expect(collection.all()).to.eql(data);
  });
};
