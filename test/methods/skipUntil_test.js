'use strict';

module.exports = (it, expect, collect) => {
  it('should skip all values before a given value appears', () => {
    const collection = collect([1, 1, 2, 2, 3, 3, 4, 4]);

    expect(collection.skipUntil(3)).to.eql(collect([3, 3, 4, 4]));
    expect(collection.skipUntil(3).all()).to.eql([3, 3, 4, 4]);

    expect(collection.skipUntil(1)).to.eql(collect([1, 1, 2, 2, 3, 3, 4, 4]));
    expect(collection.skipUntil(1).all()).to.eql([1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    const subset = collection.skipUntil(item => item >= 3);

    expect(subset.all()).to.eql([3, 4]);
  });

  it('should work with collection based on an object', () => {
    const collection = collect({
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    });

    expect(collection.skipUntil('Liverpool FC')).to.eql(collect({
      club: 'Liverpool FC',
    }));
    expect(collection.skipUntil('Liverpool FC').all()).to.eql({
      club: 'Liverpool FC',
    });

    expect(collection.skipUntil('Darwin Núñez').isNotEmpty()).to.eql(true);
    expect(collection.skipUntil('Darwin Núñez').all()).to.eql({
      club: 'Liverpool FC',
      name: 'Darwin Núñez',
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

    expect(collection.skipUntil('Liverpool FC').isEmpty()).to.eql(true);
    expect(collection.skipUntil('Liverpool FC')).to.eql(collect());
    expect(collection.skipUntil('Liverpool FC').all()).to.eql([]);
  });
};
