'use strict';

module.exports = (it, expect, collect) => {
  it('should return true if the collection doesnt contain the item', () => {
    const collection = collect([1, 2, 3]);

    expect(collection.doesntContain(3)).to.eql(false);
    expect(collection.doesntContain(4)).to.eql(true);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    const doesntContain = collection.doesntContain(value => value < 5);

    expect(doesntContain).to.eql(false);
  });

  it('should work with object based collection', () => {
    const collection = collect({
      name: 'Desk',
      price: 100,
    });

    expect(collection.doesntContain('Table')).to.eql(true);
    expect(collection.doesntContain('Desk')).to.eql(false);
  });

  it('should accept key value pairs', () => {
    const collection = collect([{
      product: 'Desk',
      price: 200,
    }, {
      product: 'Chair',
      price: 100,
    }]);

    expect(collection.doesntContain('product', 'Bookcase')).to.eql(true);
    expect(collection.doesntContain('product', 'Desk')).to.eql(false);
  });
};
