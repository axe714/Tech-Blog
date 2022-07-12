const sequelize = require('../config/connection');
const seedUsers = require('./usersSeeds');
const seedBlogs = require('./blogsSeeds');
const seedComments = require('./commentsSeeds');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('--- DB SYNCED! ---');
    
    await seedUsers();
    console.log('--- USERS SEEDED! ---');

    await seedBlogs();
    console.log('--- BLOGS SEEDED! ---');

    await seedComments();
    console.log('--- COMMENTS SEEDED! ---');

  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedAll();
