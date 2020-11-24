//import express for build web-application 
var express = require('express');

//route connected to express
const router=express.Router();

//import schemas from model 
const{createtodo,getalltodo,updatealltodo,deletealltodo}=require('../controller/todo');

//create API
router.post("/Createtodo",createtodo);
router.get("/Gettodo",getalltodo);
router.put("/Puttodo/:userId",updatealltodo);
router.delete("/Deletetodo/:userId",deletealltodo);

//export router
module.exports=router;