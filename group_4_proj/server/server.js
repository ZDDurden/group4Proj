const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://zddurden:${process.env.DB_PASS}@cluster0-hamuy.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
const assert = require("assert");
const dbName = "group4proj";

(async function() {
  client.connect(function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
      findDocuments(db, function() {
        client.close();
      });
    });
  });
})();

//app.use("/assets", express.static("assets"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("documents");
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  console.log("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
  findDocuments();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
