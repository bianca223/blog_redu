const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require("multer");
dotenv.config();

app.use(express.json());

const connectDb = async () => {
  try{
    await mongoose.connect(process.env.Mongo_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    })
    console.log("Connected to MongoDB");
  } catch (err){
    console.log(err);
  }
}
connectDb();
// mongoose.connect(process.env.Mongo_Url,{}).then(console.log("Connected to MongoDb")).catch(err=>console.log(err));
const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"images")
  },filename:(req,file,cb) =>{
    cb(null, req.body.name);
  }
})
const upload = multer({storage:storage});

app.post("api/upload", upload.single("file"),(req, res) => {
  res.status(200).json("File has been uploaded")
})
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
app.use("/api/categories", categoriesRoute)


mongoose.connection.once('open', () => {
  console.log('connected to MongoDb')
  app.listen("5000", ()=>{ console.log("Backend is running");})
});
