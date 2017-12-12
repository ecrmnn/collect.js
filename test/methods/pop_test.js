'use strict';

module.exports = (it, expect, collect) => {
  it('should remove and returns the last item from the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.pop()).to.eql(5);
    expect(collection.all()).to.eql([1, 2, 3, 4]);
  });

  it('should work when collection is an array of objects', () => {
    const collection = collect([
      {
        name: 'Sadio Mané',
        club: 'Liverpool FC',
      },
      {
        name: 'Roberto Firmino',
        club: 'Liverpool FC',
      },
      {
        name: 'Mohamed Salah',
        club: 'Liverpool FC',
      },
    ]);

    expect(collection.pop()).to.eql({
      name: 'Mohamed Salah',
      club: 'Liverpool FC',
    });

    expect(collection.all()).to.eql([
      {
        name: 'Sadio Mané',
        club: 'Liverpool FC',
      },
      {
        name: 'Roberto Firmino',
        club: 'Liverpool FC',
      },
    ]);
  });

  it('should return the last value when collection is based on an object', () => {
    const collection = collect({
      name: 'Mohamed Salah',
      club: 'Liverpool FC',
    });

    expect(collection.pop()).to.eql('Liverpool FC');

    expect(collection.all()).to.eql({
      name: 'Mohamed Salah',
    });
  });
};
