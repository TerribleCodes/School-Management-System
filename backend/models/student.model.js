const mongoose = require("mongoose");

const Student = mongoose.model(
  "student",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  })
);

module.exports = Student;
