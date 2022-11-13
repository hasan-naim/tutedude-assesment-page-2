import React from "react";
import "./Enrolled.css";

const data = [
  {
    id: 1,
    name: "Dhiraj Patwari",
    date: "14 sep, 2022",
    enrolled: 6,
    courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: 185,
  },
  {
    id: 2,
    name: "Subhash Mishra",
    date: "15 sep, 2022",
    enrolled: 22,
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    amount: 485,
  },
  {
    id: 3,
    name: "Prafull Kumar",
    date: "16 sep, 2022",
    enrolled: 23,
    courses: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "React",
    ],
    amount: 300,
  },
];

function Enrolled() {
  return (
    <section className="enroll">
      <div className="container">
        <h1 className="title">
          Friends Who Enrolled <span> &#40;3&#41; </span>
        </h1>

        <div className="card">
          <div className="header">
            <h4>{data[0].name}</h4>
            <span className="date">{data[0].date}</span>
          </div>
          <div className="enrolled">
            <span className="enroll-course">
              Courses Enrolled&#40;{data[0].enrolled}&#41;
            </span>
          </div>
          <div className="courses-container">
            {data[0].courses.map((course, i) => (
              <span key={i}>{course}</span>
            ))}
          </div>
          <div className="amount">
            <span>Referral Amount </span>
            <span className="num">₹{data[0].amount}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enrolled;
