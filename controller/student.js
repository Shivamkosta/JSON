const Student = require('../model/student');

exports.createStudent = (req,res) =>{
    console.log("post api is running");
    const id = req.body.id;
    console.log(id);
    const name = req.body.name;
    console.log(name);
    const degree = req.body.degree;
    console.log(degree);
    const mobile = req.body.mobile;
    console.log(mobile);

    const newStudent = Student({id,name,degree,mobile})
    console.log(newStudent);
    newStudent.save()
    .then(()=>res.status(200).json("user added"))
    .catch(err=>res.status(400).json(err));

};
exports.getallStudent = (req,res)=>{
    console.log("get api is running");
    Student.find({},{name:1,degree:1}).then(data=>{
        res.json({data:data})
        
    })
    .catch(err=>{res.json(err)})
    
};
exports.updateStudent = (req,res)=>{
    console.log("put api is running");
    console.log("hii");
    id=req.params.userId;               //parameter used for input in router
    console.log(id);
    data=req.body;
    console.log(data);

    Student.findByIdAndUpdate(id,{...data},{new:true})
    .then(()=> {
        res.json({
        success:true,
        message:"done"
    })
    })
    
};

exports.deleteStudent = (req,res)=>{
    console.log("delete api running");
    id=req.params.userid;
    console.log(id);
    Student.findByIdAndRemove(id).then(()=> {
    res.status(200).json({
        success:true,
        message:"done"
    })
    })
    .catch(err=>res.status(400).json(err));
}