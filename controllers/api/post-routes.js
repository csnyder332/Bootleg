const router = require("express").Router()
const multer  = require('multer')
const sharp = require('sharp');
const withAuth = require("../../utils/auth");
const posts=require("../../models/posts")
//const upload=require("../../utils/multerMiddleware")
const upload = multer({ dest: './public/images/' })
const { v4: uuidv4 } = require('uuid');

//create post
router.post("/",withAuth, upload.single('image'),async (req,res)=>{
    try{
        const UUID =uuidv4();
        const imagePath=__dirname+"../../../public/images/"+UUID+".png"
        console.log("imagePath:"+imagePath);
        console.log(req.files);
        console.log(req.file);
        console.log(req.body);
        /*sharp(req.files.image_input.data)
        .resize(20, 20, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .toFile(imagePath);
        console.log(imagePath);
        posts.create(
            {
                image_url:UUID+".png",
                caption:eq.files.image_input.caption,
                user_id:req.session.user_id
            }
        )*/
        res.redirect("/")
    }catch(err){
        res.json(err)
    }
});
module.exports=router
