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

router.put("/update/:id", async (req, res) => {
  //Post also can be used here
  console.log(req.body);
  const { name, age, gender } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, age, gender })
    .then(() => {
      res.status(200).send("User Updated");
    })
    .catch((e) => {
      console.log(`Error; ${e}`);
      res
        .status(500)
        .send({ status: "Error while sending data", error: e.message });
    });
});

router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  await Student.findByIdAndDelete(userId)
    .then(() => res.status(200).send(`User deleted ${userId}`))
    .catch((e) =>
      res
        .status(500)
        .send({ status: "Error while deleting the user", error: e.message })
    );
});

router.get("/get/:id", async (req, res) => {
  const userId = req.params.id;
  // findOne can be used if the promary key is not the ObjectId. For an example if email has been used, we have to use findOne(email)
  await Student.findById(userId)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => res.status(500).send({ status: "Error Occured", error: e }));
});

module.exports = router;
