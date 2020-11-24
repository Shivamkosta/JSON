//import model file
const Albums= require("../model/albums");

//debugging
console.log("ye chal rha hai")

//export create API
exports.createalbum =  (req,res) => {
    //add enterd data into body variable
        let body = req.body;
        console.log(body)
    //creating object of Album   
        let albums = new Albums(body);
    //saving data to album schema    
        albums.save().then((albums) => {            //.then will execute code if condition gets true
        res.send({
        notice: 'successfully created the albums'
        })
        }).catch((err) => {                         //catch will execute when condition gets false
        res.send(err);
        });
        };

//export get API        
exports.getallalbums=(req,res)=>{
    Albums.find().then(data=>       //.find()is used for searching
        {
            res.json({data:data});
        }).catch(err=> {
            res.json({
                message:"something wrong" +err
            });
        })
}

//export update API
exports.updateallalbums=(req,res)=>{
    console.log(req.params);
    id=req.params.userId;           //parameter used for input in router
    console.log(id);
    data=req.body;
    console.log(data);

    
    Albums.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {res.json({
        success:true,
        message:"done"
    })
    })
}

//export delete API
exports.deleteallalbums=(req,res)=>{
   
    id=req.params.userId;
    console.log(id);
    

    Albums.findByIdAndRemove(id).then(()=> 
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
