const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const car = require("./api/models/carModel");
const routes = require("./api/routes/carRouters");

const app = express();

let url = "mongodb://localhost:27017";

mongoose.Promise = global.Promise;
mongoose
  .connect(url)
  .then(() => {
    console.log("Rodou");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.listen(8008, () => {
  console.log("Rodando!");
});
