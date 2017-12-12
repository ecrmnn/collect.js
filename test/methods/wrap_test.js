'use strict';

module.exports = (it, expect, collect) => {
  it('should wrap string into collection', () => {
    const collection1 = collect().wrap('foo');
    expect(collection1.all()).to.eql(['foo']);
  });

  it('should wrap array into collection', () => {
    const collection2 = collect().wrap(['foo']);
    expect(collection2.all()).to.eql(['foo']);
  });

  it('should wrap object into collection', () => {
    const collection3 = collect().wrap({});
    expect(collection3.all()).to.eql({});
  });

  it('should not re-wrap a collection', () => {
    const collection4 = collect().wrap(collect([1, 2, 3, 4]));
    expect(collection4.all()).to.eql([1, 2, 3, 4]);
  });
};
