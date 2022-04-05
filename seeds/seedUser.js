const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
  {
    username: 'test',
    email: 'test@test.com',
    password: '123456'
  },
  {
    username: 'test1',
    email: 'test@test.com',
    password: '123456'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;