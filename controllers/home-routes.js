const router = require('express').Router();
//const sequelize = require('../config/connection'); this wasnt doing anything
const {
    user,
    posts,
    comment
} = require('../models');


router.get('/', (req, res) => {
    console.log("flag 1")
    posts.findAll({
            /*attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            we dont need this, boss. We want to grab all the data anyways
            */
            include: [{
                    model: comment,
                    //attributes: ['id', 'caption', 'content', 'user_id', 'createdAt'], same thing. since we need all of it, no need to filter it
                    include: {
                        model: user,
                        attributes: ['username',"id"]
                    }
                },
                {
                    model: user,//uses the user_id in posts to convert user_id to username
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            console.log("flag 2");
            const postdata = dbPostData.map(post => post.get({
                plain: true
            }));
            console.log("Post data after filtering: ");
            console.log(postdata);
            res.render('homepage', {
                postdata,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: user,
                        attributes: ['username']
                    }
                },
                {
                    model: user,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({
                    message: 'No post found with this id'
                });
                return;
            }

            const post = dbPostData.get({
                plain: true
            });

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});


router.get('*', (req, res) => {
    res.status(404).send("Can't go there!");
    // res.redirect('/');
})


module.exports = router;