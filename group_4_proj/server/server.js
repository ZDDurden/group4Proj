const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://zddurden:${process.env.DB_PASS}@cluster0-hamuy.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const assert = require("assert");


client.connect(function(err, db) {
  if (err) throw err;
  var dbo = db.db("Group4Proj");
  dbo.collection("Group4").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

//app.use("/assets", express.static("assets"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/express_backend", (req, res) => {
  res.send("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
  console.log("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
