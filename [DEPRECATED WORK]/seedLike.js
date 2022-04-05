const { likes } = require('../models');

const likesdata = [
    {
        user_id: '1',
        comment_id: '',
        post_id: ''
    },
    {
        user_id: '2',
        comment_id: '',
        post_id: ''
    },
];

const LikePosts = () => likes.bulkCreate(likesdata);

module.exports = LikePosts;