'use strict';

module.exports = (it, expect, collect) => {
  it('should test if collection contains one item', () => {
    expect(collect().containsOneItem()).to.eql(false);
    expect(collect([]).containsOneItem()).to.eql(false);
    expect(collect({}).containsOneItem()).to.eql(false);

    expect(collect([1]).containsOneItem()).to.eql(true);
    expect(collect('').containsOneItem()).to.eql(true);
    expect(collect('xo').containsOneItem()).to.eql(true);
    expect(collect(['']).containsOneItem()).to.eql(true);
    expect(collect('a', 'b').containsOneItem()).to.eql(true);
    expect(collect('value').containsOneItem()).to.eql(true);
    expect(collect(['value']).containsOneItem()).to.eql(true);
    expect(collect({ key: 'value' }).containsOneItem()).to.eql(true);

    expect(collect([1, 2, 3]).containsOneItem()).to.eql(false);
    expect(collect({ key: 'value', value: 'key' }).containsOneItem()).to.eql(false);
    expect(collect([{ key: 'value' }, { key: 'value' }]).containsOneItem()).to.eql(false);
  });
};
