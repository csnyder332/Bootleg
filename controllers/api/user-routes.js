const router = require('express').Router();
const {
    user,
    posts,
    comment
} = require('../../models');
/*  we currently dont have the handlebar to display specific users
// Get all users
router.get('/', (req, res) => {
    user.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get specific user
router.get('/:id', (req, res) => {
    user.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            },
            include: [{
                    model: posts,
                    attributes: ['id', 'title', 'content', 'created_at']
                },
                {
                    model: comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: posts,
                        attributes: ['title']
                    }
                }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id'
                });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
*/
// Create a user
router.post('/', async(req, res) => {
    try{
        const checkExistingEmail = await user.findOne({
            where:{
                email:req.body.email
            }
        })
        if (checkExistingEmail){
            console.log("THERES ALREADY AN ACCOUNT WITH THAT EMAIL");
            res.status(400).json({message:"bro, that email is already in use 🤨"})
            return
        }
        const dbUserData=await user.create({
            username: req.body.username,
            password: req.body.password,
            email:req.body.email
        });
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    }
    catch(err){
        res.status(500).json(err);
    }
})
router.post("/login",async(req,res)=>{
    try{
        const dbUserData = await user.findOne({
            where:{
                username:req.body.username
            }
        });
        if (!dbUserData){
            res.status(400).json({message:"incorrect username or password"})
            return;
        }
        const validpassword = await dbUserData.checkPassword(req.body.password)
        if (!validpassword){
            res.status(400).json({message:"incorrect username or password"})
        }
        req.session.save(()=>{
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.status(200).json({user:dbUserData,message:"logged in"})
        })
    }catch(err){
        err ? res.status(500).json(err):console.log("successfully created user")
    }
})
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;