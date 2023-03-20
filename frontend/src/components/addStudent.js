import React, { useState } from "react";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(event) {
    event.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };
    console.log(newStudent);
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div class="form-group">
          <label for="name">Student Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="text"
            class="form-control"
            id="age"
            placeholder="Enter Student Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <input
            type="text"
            class="form-control"
            id="gender"
            placeholder=" Enter Student Gender"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
