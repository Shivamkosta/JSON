//Import express module
const express=require("express");               
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const cors=require("cors");

   

const app=express();


//Connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/shivam',{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//import files from routes and save it to variable
const albumsRoutes=require("./routes/albums");      
const PhotoRoutes=require("./routes/photo");        
const CommentRoutes=require("./routes/comment");    
const TodoRoutes=require("./routes/todo");    
const StudentRoutes = require("./routes/student");   

//add middleware used by routes
app.use("/api",albumsRoutes);
app.use("/api",PhotoRoutes);
app.use("/api",CommentRoutes);
app.use("/api",TodoRoutes);
app.use("/api",StudentRoutes);

//create node server at 8000 port
const port=process.env.PORT||8000;
app.listen(port,()=> console.log(`server is running on ${port} !`));    