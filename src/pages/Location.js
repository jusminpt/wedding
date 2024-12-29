import React from "react";
import "./location.css";
import Header from "../components/Header";
import location_1 from '../images/location2.jpg'
import location_2 from '../images/location2.png'

const Location = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="container location">
          <h1>Wedding Location</h1>
          <div className="card" style={{ width: "18rem" }}>
            <img src={location_1} className="card-img-top" alt="location1"/>
            <div className="card-body">
              <h5 className="card-title">Morning Ceremony</h5>
              <p className="card-text">
                Join us for a traditional Thai wedding ceremony (แห่ขันหมาก) in
                the morning, followed by a shared lunch. The event will take
                place from <strong>7:00 AM to 12:00 PM</strong>.
              </p>
              <a
                href="https://maps.app.goo.gl/Y64CRjWpi4pz4HT29"
                className="btn btn-light"
              >
                Location <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <img src={location_2} className="card-img-top" alt="location2"/>
            <div className="card-body">
              <h5 className="card-title">Evening Ceremony</h5>
              <p className="card-text">
                Attend the modern wedding celebration in the evening, enjoy
                dinner together, and capture memories with a photo session. The
                evening event will begin at <strong>6:00 PM</strong>.
              </p>
              <a
                href="https://maps.app.goo.gl/sfYLnBaQc6iQr9yT8"
                className="btn btn-light"
              >
                Location <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
