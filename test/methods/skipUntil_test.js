'use strict';

module.exports = (it, expect, collect) => {
  it('should skip all values before a given value appears', () => {
    const collection = collect([1,1,2,2,3,3,4,4]);

    expect(collection.skipUntil(3)).to.eql(collect([1, 2]));
    expect(collection.skipUntil(3).all()).to.eql([1, 2]);

    expect(collection.skipUntil(1)).to.eql(collect([]));
    expect(collection.skipUntil(1).all()).to.eql([]);
  });

  it('should work with collection based on an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
      number: 10,
      club: 'Liverpool FC',
    });

    expect(collection.skipUntil('Liverpool FC')).to.eql(collect({
      name: 'Sadio Mané',
      number: 10,
    }));
    expect(collection.skipUntil('Liverpool FC').all()).to.eql({
      name: 'Sadio Mané',
      number: 10,
    });

    expect(collection.skipUntil('Sadio Mané').isEmpty()).to.eql(true);
    expect(collection.skipUntil('Sadio Mané').all()).to.eql({});
  });

  it('should return entire collection when multidimentional', () => {
    const data = [{
      name: 'Sadio Mané',
      number: 10,
      club: 'Liverpool FC',
    }, {
      name: 'Mohamed Salah',
      number: 11,
      club: 'Liverpool FC',
    }];

    const collection = collect(data);

    expect(collection.skipUntil('Liverpool FC')).to.eql(collect(data));
    expect(collection.skipUntil('Liverpool FC').all()).to.eql(data);
  });
};
