//import model file
const Todo= require("../model/todo");
console.log("ye chal rha hai")
//export create API
exports.createtodo=(req,res) => {
    //add enterd data into body variable
        let body = req.body;
        console.log(body)
        //creating object of photo 
        let todo = new Todo(body);
        //saving data to todo schema 
        todo.save().then((photo) => {               //.then will execute code if condition gets true
        res.send({
        notice: 'successfully created the albums'
        })
        }).catch((err) => {                         //catch will execute when condition gets false
        res.send(err);
        });
        };

        //export get API  
exports.getalltodo=(req,res)=>{
    Todo.find().then(data=>                         //.find()is used for searching
        {
            res.json({data:data});
        }).catch(err=> {
            res.json({
                message:"something wrong" +err
            });
        })
}
//export update API
exports.updatealltodo=(req,res)=>{
    console.log(req.params);
    id=req.params.userId;                       //parameter used for input in router
    console.log(id);
    data=req.body;
    console.log(data);

    Todo.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    })
}

exports.deletealltodo=(req,res)=>{
   
    id=req.params.userId;
    console.log(id);
    

    Todo.findByIdAndRemove(id).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    }).catch(err=>
        res.json({
            message:"wrong"
        })
    )
}
