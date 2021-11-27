'use strict';

module.exports = (it, expect, collect) => {
  it('should count string occurrences', () => {
    const collection = collect(['foo', 'foo', 'foo', 'bar', 'bar', 'foobar']);

    expect(collection.countBy().all()).to.eql({
      foo: 3,
      bar: 2,
      foobar: 1,
    });
  });

  it('should count boolean occurrences', () => {
    const collection = collect([true, true, false, false, false]);

    expect(collection.countBy().all()).to.eql({
      true: 2,
      false: 3,
    });
  });

  it('should count integer occurrences', () => {
    const collection = collect([1, 5, 1, 5, 5, 1]);

    expect(collection.countBy().all()).to.eql({
      1: 3,
      5: 3,
    });
  });

  it('should count occurrences based on the closure', () => {
    const collection = collect(['alice', 'aaron', 'bob', 'carla']);

    expect(collection.countBy(value => value[0]).all())
      .to.eql({
        a: 2,
        b: 1,
        c: 1,
      });

    const collection2 = collect([
      'alice@gmail.com',
      'bob@yahoo.com',
      'carlos@gmail.com',
    ]);

    const counted = collection2.countBy(email => email.split('@')[1]);

    expect(counted.all()).to.eql({
      'gmail.com': 2,
      'yahoo.com': 1,
    });
  });
};
