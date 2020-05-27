'use strict';

module.exports = (it, expect, collect) => {
  it('should return true if collection is empty', () => {
    expect(collect().isEmpty()).to.eql(true);

    expect(collect(null).isEmpty()).to.eql(true);
    expect(collect(undefined).isEmpty()).to.eql(true);

    expect(collect([]).isEmpty()).to.eql(true);
    expect(collect({}).isEmpty()).to.eql(true);

    expect(collect(['']).isEmpty()).to.eql(false);
    expect(collect([1, 2, 3]).isEmpty()).to.eql(false);

    expect(collect([null]).isEmpty()).to.eql(false);
    expect(collect([undefined]).isEmpty()).to.eql(false);
  });

  it('should return false if collection is not empty', () => {
    expect(collect('value').isEmpty()).to.eql(false);
    expect(collect(['value']).isEmpty()).to.eql(false);
    expect(collect({ key: 'value' }).isEmpty()).to.eql(false);
  });

  it('should also work if the collection is an empty string', () => {
    expect(collect('').isEmpty()).to.eql(false);
    expect(collect('xo').isEmpty()).to.eql(false);
  });
};
