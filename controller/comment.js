//import model file
const Comment= require("../model/comment");
console.log("ye chal rha hai")

//export create API
exports.createcomment=(req,res) => {
    //add enterd data into body variable
        let body = req.body;
        console.log(body)
         //creating object of Comment 
        let comment = new Comment(body);

         //saving data to comment schema 
        comment.save().then((comment) => {          //.then will execute code if condition gets true
        res.send({
        notice: 'successfully created the albums'
        })
        }).catch((err) => {                         //catch will execute when condition gets false
        res.send(err);
        });
        };

        //export get API  
exports.getallcomment=(req,res)=>{
    Comment.find().then(data=>              //.find()is used for searching
        {
            res.json({data:data});
        }).catch(err=> {
            res.json({
                message:"something wrong" +err
            });
        })
}

//export update API
exports.updateallcomment=(req,res)=>{
    console.log(req.params);
    id=req.params.userId;       //parameter used for input in router
    console.log(id);
    data=req.body;
    console.log(data);
    Comment.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    })
}
//export delete API
exports.deleteallcomment=(req,res)=>{
   
    id=req.params.userId;
    console.log(id);
    

    Comment.findByIdAndRemove(id).then(()=> 
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
