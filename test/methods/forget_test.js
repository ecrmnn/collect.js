'use strict';

module.exports = (it, expect, collect) => {
  it('should forget the given key and value', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });
    const forget = collection.forget('number');

    expect(forget.all()).to.eql({
      name: 'Steven Gerrard',
    });
    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
    });
  });

  it('should delete by index, if array based collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const forget = collection.forget(2);

    expect(forget.all()).to.eql([1, 2, 4, 5]);
    expect(collection.all()).to.eql([1, 2, 4, 5]);
  });
};
