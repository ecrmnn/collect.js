'use strict';

module.exports = (it, expect, collect) => {
  it('doesnt replace anything when passing null', () => {
    const data = [1, 2, [3, 4]];
    const collection = collect(data);

    expect(collection.replaceRecursive(null).all()).to.eql(data);
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace', () => {
    const data = ['a', 'b', ['c', 'd']];
    const collection = collect(data);

    const replaced = collection.replaceRecursive({
      0: 'z',
      2: {
        1: 'e',
      },
    });

    expect(replaced.all()).to.eql({
      0: 'z',
      1: 'b',
      2: {
        0: 'c',
        1: 'e',
      },
    });

    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace an array', () => {
    const data = [1, 2, 3, [4, 5, 6]];
    const collection = collect(data);

    const replaced = collection.replaceRecursive([
      3,
      2,
      1,
      [4, 5, 6],
    ]);

    expect(replaced.all()).to.eql({
      0: 3,
      1: 2,
      2: 1,
      3: {
        0: 4,
        1: 5,
        2: 6,
      },
    });
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace even though source is bigger than the target', () => {
    const data = [1, 2, 3, [4, 5, 6]];
    const collection = collect(data);

    const replaced = collection.replaceRecursive([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    expect(replaced.all()).to.eql({
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
    });
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace even though source is smaller than the target', () => {
    const data = [1, 2, 3, [4, 5, 6]];
    const collection = collect(data);

    const replaced = collection.replaceRecursive([8]);

    expect(replaced.all()).to.eql({
      0: 8,
      1: 2,
      2: 3,
      3: {
        0: 4,
        1: 5,
        2: 6,
      },
    });
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace with a string', () => {
    const data = [1, 2, 3, [4, 5, 6]];
    const collection = collect(data);

    const replaced = collection.replaceRecursive('x');

    expect(replaced.all()).to.eql({
      0: 'x',
      1: 2,
      2: 3,
      3: {
        0: 4,
        1: 5,
        2: 6,
      },
    });
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace with an integer', () => {
    const data = [1, 2, 3, [4, 5, 6]];
    const collection = collect(data);

    const replaced = collection.replaceRecursive(11);

    expect(replaced.all()).to.eql({
      0: 11,
      1: 2,
      2: 3,
      3: {
        0: 4,
        1: 5,
        2: 6,
      },
    });
    expect(collection.all()).to.eql(data);
  });

  it('can do recursive replace with a collection', () => {
    const data = ['a', 'b', ['c', 'd']];
    const collection = collect(data);

    const replaced = collection.replaceRecursive(collect({
      0: 'z',
      2: {
        1: 'e',
      },
    }));

    expect(replaced.all()).to.eql({
      0: 'z',
      1: 'b',
      2: {
        0: 'c',
        1: 'e',
      },
    });
    expect(collection.all()).to.eql(data);
  });

  it('should prove the readme test', () => {
    const collection = collect([
      'Matip',
      'van Dijk',
      [
        'Mané',
        'Firmino',
        'Salah',
      ],
    ]);

    const replaced = collection.replaceRecursive({
      0: 'Gomez',
      2: { 1: 'Origi' },
    });

    expect(replaced.all()).to.eql({
      0: 'Gomez',
      1: 'van Dijk',
      2: { 0: 'Mané', 1: 'Origi', 2: 'Salah' },
    });

    expect(replaced.values().all()).to.eql([
      'Gomez',
      'van Dijk',
      {
        0: 'Mané',
        1: 'Origi',
        2: 'Salah',
      },
    ]);
  });
};
