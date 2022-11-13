import React from "react";
import Card from "../Card/Card";
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

        <div className="flex">
          {data.map((obj) => (
            <Card data={obj} key={obj.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Enrolled;
