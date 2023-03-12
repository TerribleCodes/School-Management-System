const router = require("express").Router();
const Student = require("../models/student.model.js");

router.post("/add", (req, res) => {
  const { name, age, gender } = req.body;
  const newStudent = new Student({
    name,
    age,
    gender,
  });
  newStudent
    .save()
    .then(() => res.json("Student Added"))
    .catch((e) => console.log(`Error occured ${e}`));
});

router.get("/all", async (req, res) => {
  await Student.find()
    .then((result) => res.json(result))
    .catch((e) => console.log(`Error occured ${e}`));
});

module.exports = router;
