'use strict';

module.exports = (it, expect, collect) => {
  it('should take values', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(collection.takeWhile(1)).to.eql(collect([1]));
    expect(collection.takeWhile(1).all()).to.eql([1]);

    expect(collection.takeWhile(2)).to.eql(collect([]));
    expect(collection.takeWhile(2).all()).to.eql([]);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    const subset = collection.takeWhile(item => item < 3);

    expect(subset.all()).to.eql([1, 2]);
  });

  it('should work with collection based on an object', () => {
    const collection = collect({
      name: 'Darwin Núñez',
      number: 10,
      club: 'Liverpool FC',
    });

    expect(collection.takeWhile('Liverpool FC')).to.eql(collect({}));
    expect(collection.takeWhile('Liverpool FC').all()).to.eql({});

    expect(collection.takeWhile('Darwin Núñez').isNotEmpty()).to.eql(true);
    expect(collection.takeWhile('Darwin Núñez').all()).to.eql({
      name: 'Darwin Núñez',
    });
  });

  it('should work when multidimentional', () => {
    const data = [{
      name: 'Darwin Núñez',
      number: 10,
      club: 'Liverpool FC',
    }, {
      name: 'Mohamed Salah',
      number: 11,
      club: 'Liverpool FC',
    }];

    const collection = collect(data);

    expect(collection.takeWhile('Liverpool FC')).to.eql(collect([]));
    expect(collection.takeWhile('Liverpool FC').all()).to.eql([]);
  });
};
