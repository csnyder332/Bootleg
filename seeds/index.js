const sequelize = require('../config/connection');
const seedPost = require('./seedPost');
const seedUser = require('./seedUser');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();
