const { likes } = require('../models');

const Likes = [
    {
        user_id: '1',
        comment_id: '',
        post_id: 'test'
    },
    {
        user_id: '1',
        comment_id: '',
        post_id: 'test'
    },
    {
        user_id: '1',
        comment_id: '',
        post_id: 'test'
    },
    {
        user_id: '1',
        comment_id: '',
        post_id: 'test'
    },
];

const LikePosts = () => Likes.bulkCreate(likesdata);

module.exports = LikePosts;