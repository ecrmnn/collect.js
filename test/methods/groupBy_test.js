'use strict';

const products = [
  { product: 'Desk', manufacturer: 'IKEA', price: 60 },
  { product: 'Chair', manufacturer: 'IKEA', price: 60 },
  { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
  { product: 'Chair', manufacturer: 'Herman Miller' },
];

module.exports = (it, expect, collect) => {
  it('should group the collections items by the given key', () => {
    const collection = collect(products);
    const grouped = collection.groupBy('manufacturer');

    expect(Object.keys(grouped.all())).to.eql(['IKEA', 'Herman Miller']);
    expect(collection.all()).to.eql(products);
  });

  it('should accept a custom callback to group by', () => {
    const collection = collect(products);
    const grouped = collection
      .groupBy(item => item.manufacturer.substring(0, 3));

    expect(grouped.all()).to.eql({
      IKE: collect([
        { product: 'Desk', manufacturer: 'IKEA', price: 60 },
        { product: 'Chair', manufacturer: 'IKEA', price: 60 },
        { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
      ]),
      Her: collect([
        { product: 'Chair', manufacturer: 'Herman Miller' },
      ]),
    });

    expect(collection.all()).to.eql(products);
  });

  it('should return a collection of collections when grouped', () => {
    const collection = collect(products);
    const grouped = collection.groupBy('manufacturer');

    expect(grouped.first().all()).to.eql([
      { product: 'Desk', manufacturer: 'IKEA', price: 60 },
      { product: 'Chair', manufacturer: 'IKEA', price: 60 },
      { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
    ]);

    expect(grouped.last().all()).to.eql([
      { product: 'Chair', manufacturer: 'Herman Miller' },
    ]);

    expect(collection.all()).to.eql(products);
  });

  it('should use an empty string as the key ' +
    'if objects are missing the key to group by',
    () => {
      const collection = collect(products);
      const grouped = collection.groupBy('price');

      expect(grouped.all()).to.eql({
        15: collect([
          { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
        ]),
        60: collect([
          { product: 'Desk', manufacturer: 'IKEA', price: 60 },
          { product: 'Chair', manufacturer: 'IKEA', price: 60 },
        ]),
        '': collect([
          { product: 'Chair', manufacturer: 'Herman Miller' },
        ]),
      });

      expect(collection.all()).to.eql(products);
    });
};
