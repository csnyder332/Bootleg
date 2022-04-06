const { posts } = require('../models');

const postdata = [
  {
    image_url: '3c61407b-9bdf-4791-bd07-cb11deb97806.png',
    caption:'This is me, programming',
    user_id: 1
  }
];

const seedPosts = () => posts.bulkCreate(postdata);

module.exports = seedPosts;
