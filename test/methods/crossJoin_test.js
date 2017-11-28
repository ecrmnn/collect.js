'use strict';

module.exports = (it, expect, collect) => {
  it('should cross join with the given lists, returning all possible permutations', () => {
    const crossJoin1 = collect([1, 2]).crossJoin(['a', 'b']);
    expect(crossJoin1.all()).to.eql([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);

    const crossJoin2 = collect([1, 2]).crossJoin(collect(['a', 'b']));
    expect(crossJoin2.all()).to.eql([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);

    const crossJoin3 = collect([1, 2]).crossJoin(collect(['a', 'b']), ['I', 'II']);
    expect(crossJoin3.all()).to.eql([
      [1, 'a', 'I'], [1, 'a', 'II'],
      [1, 'b', 'I'], [1, 'b', 'II'],
      [2, 'a', 'I'], [2, 'a', 'II'],
      [2, 'b', 'I'], [2, 'b', 'II'],
    ]);

    const crossJoin4 = collect([1, 2]).crossJoin(['a', 'b'], ['I', 'II']);
    expect(crossJoin4.all()).to.eql([
      [1, 'a', 'I'], [1, 'a', 'II'],
      [1, 'b', 'I'], [1, 'b', 'II'],
      [2, 'a', 'I'], [2, 'a', 'II'],
      [2, 'b', 'I'], [2, 'b', 'II'],
    ]);
  });
};
