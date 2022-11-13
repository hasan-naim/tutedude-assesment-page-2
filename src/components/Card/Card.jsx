import React from "react";

function Card({ data }) {
  return (
    <div className="card flex">
      <div className="card-img">
        <img src={data.icon} alt="" />
      </div>
      <div className="card-desc">
        <h4>{data.title}</h4>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default Card;
