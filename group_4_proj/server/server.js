const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  console.log("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
