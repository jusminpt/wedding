import React from "react";
import "./location.css";
import Header from "../components/Header";

const Location = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="container location">
          <h1>Wedding Location</h1>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Morning Ceremony</h5>
              <p className="card-text">
                Join us for a traditional Thai wedding ceremony (แห่ขันมาก) in
                the morning, followed by a shared lunch. The event will take
                place from <strong>9:00 AM to 12:00 PM</strong>.
              </p>
              <a
                href="https://maps.app.goo.gl/GmitPnmbZNkmZG229"
                className="btn btn-success"
              >
                Location
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Evening Ceremony</h5>
              <p className="card-text">
                Attend the modern wedding celebration in the evening, enjoy
                dinner together, and capture memories with a photo session. The
                evening event will begin at <strong>7:00 PM</strong>.
              </p>
              <a
                href="https://maps.app.goo.gl/sfYLnBaQc6iQr9yT8"
                className="btn btn-success"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
