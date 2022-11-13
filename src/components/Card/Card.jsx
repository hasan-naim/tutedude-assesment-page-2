import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <div className="header">
        <h4>{data.name}</h4>
        <span className="date">{data.date}</span>
      </div>
      <div className="enrolled">
        <span className="enroll-course">
          Courses Enrolled&#40;{data.enrolled}&#41;
        </span>
      </div>
      <div className="courses-container">
        {data.courses.map((course, i) => (
          <span key={i}>{course}</span>
        ))}
      </div>
      <div className="amount">
        <span>Referral Amount </span>
        <span className="num">₹{data.amount}</span>
      </div>
    </div>
  );
}

export default Card;
