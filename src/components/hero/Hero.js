import React from "react";
import "../hero/HeroStyle.css";
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div className="hero">
      <form>
        <div className="text">
          <label>Where</label>
          <input
            className="text_input"
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className="from">
          <span className="border"></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className="until">
          <span className="border"></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className="search_btn">
          <CiSearch className="icon" />
          <button className="btn">Search for cars</button>
        </div>
      </form>
    </div>
  );
}

export default Hero;
