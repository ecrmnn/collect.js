'use strict';

const products = [
  { product: 'Desk', price: 200, manufacturer: 'IKEA' },
  { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
  { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
  { product: 'Door', price: '100' },
];

module.exports = (it, expect, collect) => {
  const collection = collect(products);

  it('should retrieve all of the collection values for a given key', () => {
    const pluck = collection.pluck('product');

    expect(pluck.all()).to.eql(['Desk', 'Chair', 'Bookcase', 'Door']);
    expect(collection.all()).to.eql(products);
  });

  it('should return null when an object is missing the key', () => {
    const pluck = collection.pluck('manufacturer');

    expect(pluck.all()).to.eql(['IKEA', 'Herman Miller', 'IKEA', null]);
    expect(collection.all()).to.eql(products);

    const nulls = collection.pluck('non existing key');
    expect(nulls.all()).to.eql([null, null, null, null]);
    expect(collection.all()).to.eql(products);
  });

  it('should be able to pluck key and value pairs', () => {
    const pluck = collection.pluck('price', 'product');

    expect(pluck.all()).to.eql({
      Desk: 200,
      Chair: 100,
      Bookcase: 150,
      Door: '100',
    });
  });

  it('should return an array when only plucking values', () => {
    const pluck = collection.pluck('product');

    expect(pluck.all()).to.be.an('array');
    expect(pluck.all()).to.not.be.an('object');
  });

  it('should return an object when plucking key and value pairs', () => {
    const pluck = collection.pluck('price', 'product');

    expect(pluck.all()).to.be.an('object');
    expect(pluck.all()).to.not.be.an('array');
  });

  it('should overwrite existing keys', () => {
    const pluck = collection.pluck('product', 'manufacturer');

    expect(pluck.all()).to.eql({
      IKEA: 'Bookcase',
      'Herman Miller': 'Chair',
      '': 'Door',
    });
  });

  it('should use empty string as key if object is missing property', () => {
    const pluck = collection.pluck('product', 'manufacturer');

    expect(pluck.keys().last()).to.eql('');
    expect(pluck.last()).to.eql('Door');
  });

  it('should use null as value if value is missing', () => {
    const pluck = collection.pluck('manufacturer', 'product');

    expect(pluck.get('Door')).to.eql(null);

    expect(pluck.all()).to.eql({
      Desk: 'IKEA',
      Chair: 'Herman Miller',
      Bookcase: 'IKEA',
      Door: null,
    });
  });
};
