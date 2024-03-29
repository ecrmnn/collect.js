'use strict';

module.exports = (it, expect, collect) => {
  it('should skip all values before a given value appears', () => {
    const collection = collect([1, 1, 2, 2, 3, 3, 4, 4]);

    expect(collection.skipWhile(1)).to.eql(collect([2, 2, 3, 3, 4, 4]));
    expect(collection.skipWhile(1).all()).to.eql([2, 2, 3, 3, 4, 4]);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    const subset = collection.skipWhile(item => item <= 3);

    expect(subset.all()).to.eql([4]);
  });

  it('should work with collection based on an object', () => {
    const collection = collect({
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    });

    expect(collection.skipWhile('Liverpool FC')).to.eql(collect({
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    }));
    expect(collection.skipWhile('Liverpool FC').all()).to.eql({
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    });

    expect(collection.skipWhile('Darwin Núñez').isNotEmpty()).to.eql(true);
    expect(collection.skipWhile('Darwin Núñez').all()).to.eql({
      club: 'Liverpool FC',
      number: 27,
    });
  });

  it('should work when multidimentional', () => {
    const data = [{
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    }, {
      name: 'Mohamed Salah',
      number: 11,
      club: 'Liverpool FC',
    }];

    const collection = collect(data);

    expect(collection.skipWhile('Liverpool FC')).to.eql(collect(data));
    expect(collection.skipWhile('Liverpool FC').all()).to.eql(data);
  });
};
