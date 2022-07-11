const { Users } = require('../models');

const usersData = [
  {
    username: 'alleciscool',
    password: 'test1234',
  },
  {
    username: 'brianiscool',
    password: 'test1234',
  },
  {
    username: 'keviniscool',
    password: 'test1234',
  },
  {
    username: 'tonyiscool',
    password: 'test1234',
  },
];

const seedUsers = () => Users.bulkCreate(usersData, {individualHooks: true});

module.exports = seedUsers;