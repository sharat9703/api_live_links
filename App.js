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
  res.send("Amazon Clone Site!");
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

app.get("/categories/:category_name", (req, res) => {
  let category_name = req.params.category_name;
  db.collection(category_name)
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// api to get items from subcategory(fashion)=>

app.get("/fashion/:id", (req, res) => {
  let id = Number(req.params.id);
  db.collection("fashion")
    .find({ sub_category_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// api to get items from subcategory(electronics)=>

app.get("/electronics/:id", (req, res) => {
  let id = Number(req.params.id);
  db.collection("electronics")
    .find({ sub_category_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//api to get details of a product

app.get("/product/:product_name", (req, res) => {
  let product_name = req.params.product_name;
  let item_id = Number(req.query.item_id);
  let query = {};
  if (item_id) {
    query = { item_id: item_id };
  }
  db.collection(product_name)
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
