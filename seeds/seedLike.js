const { likes } = require('../models');

const Likes = [
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
    {
        user_id: '1',
        comment_id: '',
        
    },
    {
        user_id: '2',
        comment_id: '',
        
    },
];

const LikePosts = () => Likes.bulkCreate(likesdata);

module.exports = LikePosts;