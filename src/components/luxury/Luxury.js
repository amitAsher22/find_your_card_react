import React from "react";
import "../luxury/LuxuryStyle.css";

function Luxury() {
  return (
    <div className="luxury">
      <div className="heading">
        <h2>Luxury Selection</h2>
        <div className="text_bg">
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <img
            src="https://media.gettyimages.com/id/458535361/photo/rolls-royce.jpg?s=612x612&w=0&k=20&c=spGpeHu-Hu0AqxWv60bfjx8cRalEvUnxfwJhRbmXdPM="
            alt="imgDribe"
          />
          <div className="content">
            <h3>rolls royce </h3>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.gettyimages.com/id/458998325/photo/maserati-gran-turismo.jpg?s=612x612&w=0&k=20&c=mDbyxoKEcWLTEl0E_ArvxJ_E-gxCw9rkEBQkjNOvK94="
            alt="imgDribe"
          />
          <div className="content">
            <h3>Maserati</h3>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.gettyimages.com/id/506513984/photo/range-rover-evoque-suv.jpg?s=612x612&w=0&k=20&c=OxVU0Sl4ByzAJV9RZFN_Q21g5wLWG7bWPRVBGbDpxxc="
            alt="imgDribe"
          />
          <div className="content">
            <h3>range rover</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Luxury;
