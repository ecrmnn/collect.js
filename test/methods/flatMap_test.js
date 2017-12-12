'use strict';

module.exports = (it, expect, collect) => {
  it('should iterate through the collection and passes each value to the given callback', () => {
    const collection = collect([
      { name: 'Robbie Fowler' },
      { nickname: 'The God' },
      { position: 'Striker' },
    ]);

    const flatMapped = collection.flatMap(values => values.map(value => value.toUpperCase()));

    expect(flatMapped.all()).to.eql({
      name: 'ROBBIE FOWLER',
      nickname: 'THE GOD',
      position: 'STRIKER',
    });

    expect(collection.all()).to.eql([
      { name: 'Robbie Fowler' },
      { nickname: 'The God' },
      { position: 'Striker' },
    ]);
  });

  it('should override the value of the key already exists', () => {
    const collection = collect([
      { name: 'Sadio Mané' },
      { name: 'Roberto Firmino' },
    ]);

    const flatMapped = collection.flatMap(values => values.map(value => value.toUpperCase()));

    expect(flatMapped.all()).to.eql({
      name: 'ROBERTO FIRMINO',
    });
  });

  it('should receive index as second parameter', () => {
    const collection = collect([
      { p1: 'Sadio Mané' },
      { p2: 'Roberto Firmino' },
    ]);

    const flatMapped = collection.flatMap((values, index) => [index]);

    expect(flatMapped.all()).to.eql({
      p1: 0,
      p2: 1,
    });
  });
};
