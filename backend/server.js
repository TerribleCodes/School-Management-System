const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

const server = async () => {
  await mongoose
    .connect(uri)
    .then(
      app.listen(port, () => {
        console.log(`Successfully connected to the database`);
        console.log(`Server running at http://localhost:${port}`);
      })
    )
    .catch((e) => console.log(`Error occured ${e}`));
};

server();

// 1:21
