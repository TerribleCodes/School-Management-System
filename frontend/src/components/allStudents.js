import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/student/all")
        .then((response) => {
          setStudents(response.data);
          console.log(students[0]);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getStudents();
  }, []);

  return (
    <div className="container">
      <h1>{students.values}</h1>
    </div>
  );
}
