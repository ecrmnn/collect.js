'use strict';

module.exports = (it, expect, collect) => {
  const users = [
    {
      id: 1,
      name: 'John',
      sex: 'male',
      age: 20,
      companies: [{ name: 'Appl Inc' }, { name: 'Microsof Inc' }],
      stat: {
        weight: 64,
        height: 174,
      },
    },
    {
      id: 2,
      name: 'Vuvuzela',
      sex: 'female',
      age: 30,
      companies: [{ name: 'Amazo Inc' }, { name: 'Alibab Inc' }],
      stat: {
        weight: 50,
        height: 164,
      },
    },
  ];

  it('return items, but not modified the original', () => {
    const collectUsers = collect(users);
    const newUser = {
      id: 3,
      name: 'Vinmart',
      sex: 'male',
      age: 51,
      companies: [{ name: 'VinGrou Inc' }],
      stat: {
        weight: 70,
        height: 170,
      },
    };
    collectUsers.push(newUser);
    expect(users.length).to.be.equal(2);
    expect(collectUsers.all().length).to.be.equal(3);
  });

  it('return items, but not modified properties of the original', () => {
    const filter = collect(users)
      .where('age', '>=', 20)
      .first();
    filter.name = 'Anna';
    expect(filter.id).to.be.equal(1);
    expect(filter.id).to.be.equal(users[0].id);
    expect(users[0].name).to.be.equal('John');
  });

  it('return items, but not modified child properties of the original', () => {
    const filter = collect(users)
      .where('age', '>=', 20)
      .first();
    filter.companies[0].name = 'Unileve Inc';
    expect(filter.id).to.be.equal(1);
    expect(filter.id).to.be.equal(users[0].id);
    expect(users[0].companies[0].name).to.be.equal('Appl Inc');
  });
};
