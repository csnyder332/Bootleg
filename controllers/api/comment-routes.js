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
        comment.destroy({
            where:{
                id:req.body.id
            }
        })
        res.status(200).json()
    }catch(err){
        console.log(err);
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
//Edit post
router.post("/edit",withAuth,async (req,res)=>{
    try{
        console.log(req.body);
        const checkRow = await comment.findByPk(req.body.id)
        console.log(checkRow);
        if (checkRow.dataValues.user_id==req.session.user_id){
            console.log("user owns comment");
        }else{
            res.status(500).json()
        }
        const updatedrow= await comment.update(
            {
                content:req.body.message
            },
            {
                where:{id:req.body.id}
            }
        )
        console.log(updatedrow);
        res.status(200).json()
    }
    catch(err){
        console.log(err);
        res.status(500).json()
    }
})

module.exports = router;