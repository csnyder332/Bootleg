const { posts } = require('../models');

const postdata = [
  {
    image_url: 'Large Image',
    caption:
      'This is a caption',
    user_id: 'test'
  },
  {
    image_url: 'small Image',
    caption:
      'This is a caption1',
    user_id: 'test'
  },
  {
    image_url: 'medium Image',
    caption:
      'This is a caption2',
    user_id: 'test'
  },
  {
    image_url: 'tiny Image',
    caption:
      'This is a caption3',
    user_id: 'test'
  },
];

const seedPosts = () => posts.bulkCreate(postdata);

module.exports = seedPosts;
