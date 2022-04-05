const router = require("express").Router()
const sharp = require('sharp');
const withAuth = require("../../utils/auth");
const posts=require("../../models/posts")
const upload=require("../../utils/multerMiddleware")
const { v4: uuidv4 } = require('uuid');
router.post("/",/*withAuth, */ upload.single('image'),async (req,res)=>{
    try{
        const UUID =uuidv4();
        console.log(UUID);
        const imagePath=__dirname+"../../../public/images/"+UUID+".png"
        console.log("imagePath:"+imagePath);
        sharp(req.files.image_input.data)
        .resize(20, 20, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .toFile(imagePath);
        console.log(imagePath);
        res.status(200).json({ name: imagePath });
            /*posts.create(
                {
                    message:req.body.blog_content,
                    user_id:req.session.User_Id
                }
        )*/
    }catch(err){
        res.json(err)
    }
});

module.exports=router
