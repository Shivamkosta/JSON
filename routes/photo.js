//import express for build web-application 
var express = require('express');

//route connected to express
const router=express.Router();

//import schemas from model 
const{createphoto,getallphoto,updateallphoto,deleteallphoto}=require('../controller/photo');
//create API
router.post("/Createphoto",createphoto);
router.get("/Getphoto",getallphoto);
router.put("/Putphoto/:userId",updateallphoto);
router.delete("/Deletephoto/:userId",deleteallphoto);

//export router
module.exports=router;