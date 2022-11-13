import React from "react";

function ReferCard({ data }) {
  return (
    <div className="refer-card">
      <span>{data.title}</span>
      <h1>{data.price}</h1>
    </div>
  );
}

export default ReferCard;
