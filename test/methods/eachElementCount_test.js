'use strict';

module.exports = (it, expect, collect) => {
  it('should return the count of the each elements in the array', () => {
    expect(collect([1, 2, 3, 3]).eachElementCount()).to.eql({ 1: 1, 2: 1, 3: 2 });
    expect(collect([{ name: 'abc', age: 12 }, {name: 'por', age: 52 }, { name: "abc", age: 12 }]).eachElementCount()).to.eql({ "{'name': 'abc', 'age': 12}": 2, "{'name': 'por', 'age': 52}": 1 });
  });
};
