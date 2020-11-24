//import express for build web-application 
var express = require('express');
//route connected to express
const router=express.Router();

//import schemas from model 
const{createalbum,getallalbums,updateallalbums,deleteallalbums}=require('../controller/albums');
//create API
router.post("/Createalbum",createalbum);
router.get("/Getalbums",getallalbums);
router.put("/Putalbums/:userId",updateallalbums);
router.delete("/Deletealbums/:userId",deleteallalbums);

//export router
module.exports=router;