const express = require("express");
const router = express.Router();

const{createStudent,getallStudent,updateStudent,deleteStudent} = require("../controller/student");
router.post("/createstudent",createStudent);
router.get('/getallstudent',getallStudent);
router.put('/updatestudent/:userId',updateStudent);
router.delete('/deletestudent/:userid',deleteStudent);

module.exports = router;