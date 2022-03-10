const { faker } = require('@faker-js/faker');
const ObjectID = require('mongodb').ObjectID

module.exports = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    name: 'Super Administrator',
    email: 'admin@admin.com',
    password: '$2b$05$BPqNSJUNE1NutE9TENO3Zevy42tExvwq5sf.q7kK5Ydos.HZff8xa',
    roles: [ObjectID('620099e0284dd6469b43131c'),ObjectID('6200acdb658b3a7939924b8e')],
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148f',
    city: 'Lima',
    country: 'Peru',
    phone: '+51 935123456',
    urlTwitter: faker.internet.url(),
    urlGitHub: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    name: 'Simple user',
    email: 'user@user.com',
    password: '$2b$05$cAMVd5MCTg7.UIp8gGMKheCC7y2KpccyNHOXS4XR4M/Mp/J3yVa6C',
    roles: [ObjectID('6200acdb658b3a7939924b8e')],
    verified: true,
    verification: '3d6e072c-0eaf-4239-bb5e-495e6486148d',
    city: 'Lima',
    country: 'Peru',
    phone: '+51 935123456',
    urlTwitter: faker.internet.url(),
    urlGitHub: faker.internet.url(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]