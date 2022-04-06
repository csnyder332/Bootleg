const { user} = require('../models');

const userdata = [
  {
    username: 'test',
    email: 'test@test.com',
    password: '123456'
  },
  {
    username: 'test1',
    email: 'test@test1.com',
    password: '123456'
  }
];

const seedUsers = () => user.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;