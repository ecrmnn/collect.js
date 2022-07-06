'use strict';

module.exports = (it, expect, collect) => {
  it('should unwrap from collection to array', () => {
    expect(collect().unwrap(collect(['foo']))).to.eql(['foo']);
    expect(collect().unwrap(collect({ name: 'Darwin Núñez' }))).to.eql({ name: 'Darwin Núñez' });
  });

  it('should unwrap to array', () => {
    expect(collect().unwrap(['foo'])).to.eql(['foo']);
  });

  it('should unwrap to string', () => {
    expect(collect().unwrap('foo')).to.eql('foo');
  });

  it('should unwrap to an object', () => {
    expect(collect().unwrap({ name: 'Darwin Núñez' })).to.eql({ name: 'Darwin Núñez' });
  });
};
