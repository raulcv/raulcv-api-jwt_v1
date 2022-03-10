const ObjectID = require('mongodb').ObjectID
const { faker } = require('@faker-js/faker');
const arrayRoleData = [
  {
    _id: new ObjectID('620099e0284dd6469b43131c'),
    name: 'admin',
    description: 'Administrator User',
    state: 'A',
    createdAt: faker.date.past()
  },
  {
    _id: new ObjectID('6200acdb658b3a7939924b8e'),
    name: 'public',
    description: 'Public User',
    state: 'I',
    createdAt: faker.date.past(),
  }
]

module.exports = arrayRoleData;