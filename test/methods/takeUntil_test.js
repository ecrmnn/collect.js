'use strict';

module.exports = (it, expect, collect) => {
  it('should take values', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(collection.takeUntil(3)).to.eql(collect([1, 2]));
    expect(collection.takeUntil(3).all()).to.eql([1, 2]);

    expect(collection.takeUntil(1)).to.eql(collect([]));
    expect(collection.takeUntil(1).all()).to.eql([]);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    const subset = collection.takeUntil(item => item >= 3);

    expect(subset.all()).to.eql([1, 2]);
  });

  it('should work with collection based on an object', () => {
    const collection = collect({
      name: 'Darwin Núñez',
      number: 27,
      club: 'Liverpool FC',
    });

    expect(collection.takeUntil('Liverpool FC')).to.eql(collect({
      name: 'Darwin Núñez',
      number: 27,
    }));
    expect(collection.takeUntil('Liverpool FC').all()).to.eql({
      name: 'Darwin Núñez',
      number: 27,
    });

    expect(collection.takeUntil('Darwin Núñez').isEmpty()).to.eql(true);
    expect(collection.takeUntil('Darwin Núñez').all()).to.eql({});
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

    expect(collection.takeUntil('Liverpool FC')).to.eql(collect(data));
    expect(collection.takeUntil('Liverpool FC').all()).to.eql(data);
  });
};
