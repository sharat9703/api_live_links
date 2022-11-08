let express = require("express");
let app = express();
let fs = require("fs");
let dotenv = require("dotenv");
dotenv.config();
let cors = require("cors");
let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
let port = process.env.PORT || 9800;
let mongoURL = process.env.MongoLive;

const morgan = require("morgan");

let db;
// middleware
app.use(morgan("short", { stream: fs.createWriteStream("./app.logs") }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is from Express!");
});

//connecting to mongodb
MongoClient.connect(mongoURL, (err, client) => {
  if (err) console.log("error while connecting!");
  db = client.db("my_app_data");
  app.listen(port, () => {
    console.log(`listening to ${port}`);
  });
});


//api to get list of categories
app.get("/categories", (req, res) => {
  db.collection("categories")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//api to get all items of any category=>

app.get("/categories/:category_name",(req,res)=>{
let category_name = req.params.category_name;
  db.collection(category_name).find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result);    
  });
});