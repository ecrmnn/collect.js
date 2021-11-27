'use strict';

module.exports = (it, expect, collect) => {
  it('should join the collection', () => {
    expect(collect(['a', 'b', 'c']).join(', '))
      .to.eql('a, b, c');

    expect(collect(['a', 'b', 'c']).join(', ', ' and '))
      .to.eql('a, b and c');

    expect(collect(['a', 'b']).join(', ', ' and '))
      .to.eql('a and b');

    expect(collect(['a']).join(', ', ' and '))
      .to.eql('a');

    expect(collect([]).join(', ', ' and '))
      .to.eql('');
  });

  it('should join the object based collection', () => {
    expect(collect({
      first: 'a',
      second: 'b',
      third: 'c',
    })
      .join(', '))
      .to.eql('a, b, c');

    expect(collect({
      first: 'a',
      second: 'b',
      third: 'c',
    })
      .join(', ', ' and '))
      .to.eql('a, b and c');

    expect(collect({
      first: 'a',
      second: 'b',
    })
      .join(', ', ' and '))
      .to.eql('a and b');

    expect(collect({
      first: 'a',
    })
      .join(', ', ' and '))
      .to.eql('a');

    expect(collect({})
      .join(', ', ' and '))
      .to.eql('');
  });
};
