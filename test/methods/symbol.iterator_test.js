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
  });
};
