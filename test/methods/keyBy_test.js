'use strict';

module.exports = (it, expect, collect) => {
  const data = [{
    id: 100,
    product: 'Chair',
    manufacturer: 'IKEA',
    price: '1490 NOK',
  }, {
    id: 150,
    product: 'Desk',
    manufacturer: 'IKEA',
    price: '900 NOK',
  }, {
    id: 200,
    product: 'Chair',
    manufacturer: 'Herman Miller',
    price: '9990 NOK',
  }];

  it('should key the collection by the given key', () => {
    const collection = collect(data);
    const keyed = collection.keyBy('manufacturer');

    expect(keyed.all()).to.eql({
      IKEA: {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK',
      },
      'Herman Miller': {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK',
      },
    });

    expect(collection.all()).to.eql(data);
  });

  it('should key the collection by the given callback', () => {
    const collection = collect(data);
    const keyedUpperCase = collection.keyBy(item => item.manufacturer.toUpperCase());

    expect(keyedUpperCase.all()).to.eql({
      IKEA: {
        id: 150,
        product: 'Desk',
        manufacturer: 'IKEA',
        price: '900 NOK',
      },
      'HERMAN MILLER': {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK',
      },
    });

    expect(collection.all()).to.eql(data);
  });

  it('should only keep one items per key', () => {
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

    const keyed = collection.keyBy('club');

    expect(keyed.all()).to.eql({
      'Liverpool FC': {
        name: 'Mohamed Salah',
        club: 'Liverpool FC',
      },
    });
  });

  it('should key everything by an empty string if key does not exist', () => {
    const collection = collect(data);
    const keyed = collection.keyBy('xoxo');

    expect(keyed.all()).to.eql({
      '': {
        id: 200,
        product: 'Chair',
        manufacturer: 'Herman Miller',
        price: '9990 NOK',
      },
    });

    expect(collection.all()).to.eql(data);
  });
};
