import React from "react";
import "../driver/DriverStyle.css";
import driveImg from "../../images/drive.png";

function Driver() {
  return (
    <div className="driver">
      <div className="left">
        <img src={driveImg} alt="driverimges" />
      </div>
      <div>
        <h2>
          Find your perfect car <span>to try before you buy </span>
        </h2>
        <p>
          make sure your future wheels work well with your lifestyle by taking
          your time in the driver seat.
        </p>
        <button>Browswer Cars</button>
      </div>
    </div>
  );
}

export default Driver;
