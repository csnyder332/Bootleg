/*
 the purpose of this route is to create comments and delete them. 
 */
const router = require('express').Router();
const {
    user,
    posts,
    comment
} = require('../../models');
const withAuth = require('../../utils/auth');
//Delete a comment
router.delete("/",async (req,res)=>{
    try{
        replies.destroy({
            where:{
                id:req.body.id
            }
        })
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
//Create a comment
router.post('/', withAuth, (req, res) => {
    console.log(req.body);
    comment.create({
        content: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});


module.exports = router;