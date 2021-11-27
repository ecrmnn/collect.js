'use strict';

module.exports = (it, expect, collect) => {
  it('should execute the given callback when the first argument given to the method evaluates to true', () => {
    const collection = collect([1, 2, 3]);

    collection.when(true, (c) => {
      c.push(4);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.when(false, (c) => {
      c.push(5);
    }, (c) => {
      c.push(6);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4, 6]);
  });

  it('should pass the value over to the callback', () => {
    let collection = collect(['michael', 'tom']);

    collection.when('adam', (innerCollection, newName) => innerCollection.push(newName));

    expect(collection.all()).to.eql(['michael', 'tom', 'adam']);

    collection = collect(['michael', 'tom']);

    collection.when(false, (innerCollection, newName) => innerCollection.push(newName));

    expect(collection.all()).to.eql(['michael', 'tom']);
  });

  it('should call the default callback if the value is false', () => {
    const collection = collect(['michael', 'tom']);

    collection.when(false, innerCollection => innerCollection.push('adam'), innerCollection => innerCollection.push('taylor'));

    expect(collection.all()).to.eql(['michael', 'tom', 'taylor']);
  });

  it('should return the collection object', () => {
    const collection = collect(['michael', 'tom']);

    const newCollection = collection.when('adam', innerCollection => innerCollection.push('adam'));

    expect(newCollection).to.eql(collection);
    expect(collection.all()).to.eql(['michael', 'tom', 'adam']);
  });
};
