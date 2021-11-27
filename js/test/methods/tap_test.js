'use strict';

module.exports = (it, expect, collect) => {
  it('should passes the collection to the given callback', () => {
    let tapped = null;

    const number = collect([2, 4, 3, 1, 5])
      .sort()
      .tap((collection) => {
        tapped = collection.all();
      })
      .shift();

    expect(tapped).to.eql([2, 3, 4, 5]);
    expect(number).to.eql(1);
  });

  it('should work when collection is based on an object', () => {
    const data = {
      name: 'Mohamed Salah',
      number: 11,
      club: 'Liverpool FC',
    };

    let tapped = null;

    collect(data)
      .tap((collection) => {
        tapped = collection.all();
      });

    expect(tapped).to.eql(data);
  });
};
