//import model file
const Photo= require("../model/photo");
console.log("ye chal rha hai")
//export create API
exports.createphoto=(req,res) => {
    //add enterd data into body variable
        let body = req.body;
        console.log(body)
        //creating object of photo 
        let photo = new Photo(body);
        //saving data to photo schema 
        photo.save().then((photo) => {          //.then will execute code if condition gets true
        res.send({
        notice: 'successfully created the albums'
        })
        }).catch((err) => {                     //catch will execute when condition gets false
        res.send(err);
        });
        };

        //export get API  
exports.getallphoto=(req,res)=>{
    Photo.find().then(data=>{            //.find()is used for searching
            res.json({data:data});
        }).catch(err=> {
            res.json({
                message:"something wrong" +err
            });
        })
}
//export update API
exports.updateallphoto=(req,res)=>{
    console.log(req.params);
    id=req.params.userId;               //parameter used for input in router
    console.log(id);
    data=req.body;
    console.log(data);

    Photo.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    })
}


//export delete API
exports.deleteallphoto=(req,res)=>{
   
    id=req.params.userId;
    console.log(id);
    

    Photo.findByIdAndRemove(id).then(()=> 
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
