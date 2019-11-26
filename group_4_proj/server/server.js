const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
// const MongoClient = require("mongodb").MongoClient;
// const url = `mongodb+srv://zddurden:${process.env.DB_PASS}@cluster0-hamuy.mongodb.net/test?retryWrites=true&w=majority`;
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const assert = require("assert");
const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-server-sdk');
// const {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } = require('mongodb-stitch-react-native-sdk');

const client = Stitch.initializeDefaultAppClient('group4proj-kjjhf');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Group4Project');

client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
  db.collection('Group4').find({}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});

// client.connect(function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Group4Proj");
//   dbo.collection("Group4").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

app.get("/", (req, res) => {
  res.send("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
  console.log("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
