'use strict';

module.exports = (it, expect, collect) => {
  it('should be iterable', () => {
    let result = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const item of collect([1, 2, 3, 4, 5])) {
      result += item;
    }

    expect(result).to.eql('12345');

    const result2 = [];
    const clubs = collect([{ name: 'Liverpool' }, { name: 'Arsenal' }, { name: 'Chelsea' }]);

    // eslint-disable-next-line no-restricted-syntax
    for (const club of clubs) {
      result2.push(club);
    }

    expect(result2).to.eql(clubs.all());

    // If test3 was done with previous version of symbol.iterator
    // it will cause infinite-loop
    let result3 = '';
    const objectCollection = collect({
      foo1: 'bar1',
      foo2: 'bar2',
      foo3: 'bar3',
      foo4: 'bar4',
    });

    expect(() => {
      let iteration = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const value of objectCollection) {
        result3 += value;
        iteration += 1;
        if (iteration > 100) {
          throw new Error('An infinite loop has occured');
        }
      }
    }).to.not.throw(Error);

    expect(result3).to.eql('bar1bar2bar3bar4');
  });
};
