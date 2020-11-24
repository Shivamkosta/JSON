//import express for build web-application 
var express = require('express');

//route connected to express
const router=express.Router();

//import schemas from model 
const{createcomment,getallcomment,updateallcomment,deleteallcomment}=require('../controller/comment');

//create API
router.post("/Createcomment",createcomment);
router.get("/Getcomment",getallcomment);
router.put("/Putcomment/:userId",updateallcomment);
router.delete("/Deletecomment/:userId",deleteallcomment);

//export router
module.exports=router;