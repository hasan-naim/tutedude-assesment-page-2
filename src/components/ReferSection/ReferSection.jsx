import React from "react";
import { MdWest } from "react-icons/md";
import "./ReferSection.css";

function ReferSection() {
  return (
    <section className="refer">
      <div className="container">
        <div className="back">
          <span>
            <MdWest /> go back
          </span>
        </div>
        <div className="flex">
          <div className="refer-code">
            <span>Your Referral Code</span>
            <div>
              <span>E</span>
              <span>D</span>
              <span>C</span>
              <span>H</span>
              <span>5</span>
              <span>4</span>
            </div>
          </div>
          <div className="wallet">
            <span className="primary">Wallet Balance</span>
            <span className="amount">₹ 500</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferSection;
