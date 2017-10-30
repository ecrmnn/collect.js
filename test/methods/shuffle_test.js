'use strict';

module.exports = (it, expect, collect) => {
  it('should shuffle the items in the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const shuffled = collection.shuffle();

    expect(shuffled.all().length).to.eql(5);
    expect(shuffled.all()[0]).to.be.within(1, 5);
    expect(shuffled.all()[1]).to.be.within(1, 5);
    expect(shuffled.all()[2]).to.be.within(1, 5);
    expect(shuffled.all()[3]).to.be.within(1, 5);
    expect(shuffled.all()[4]).to.be.within(1, 5);

    expect(collection.all().length).to.eql(5);
    expect(collection.count()).to.eql(5);
  });

  it('should shuffle values when collection is based on an object', () => {
    const collection = collect({
      qwe: 1,
      xkx: 2,
      681: 3,
      '--': 4,
      xoxo: 5,
    });

    const shuffled = collection.shuffle();

    expect(shuffled.all().length).to.eql(5);
    expect(shuffled.all()[0]).to.be.within(1, 5);
    expect(shuffled.all()[1]).to.be.within(1, 5);
    expect(shuffled.all()[2]).to.be.within(1, 5);
    expect(shuffled.all()[3]).to.be.within(1, 5);
    expect(shuffled.all()[4]).to.be.within(1, 5);

    expect(collection.all().length).to.eql(5);
    expect(collection.count()).to.eql(5);
  });
};
