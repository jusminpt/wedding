import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Stay.css";

const Stay = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="container stay">
          <h1>Where to Stay</h1>
          <p>
            Here are some hotels and accommodation options near the wedding
            venue:
          </p>
          <ul>
            <li>
              Sri Supan Villa Hotel - 3 minutes away from the venue
              <Link to="https://maps.app.goo.gl/vGz3twkpqTnJjopv6" className="stay-link">
                <span className="stay-span">Visit <i className="fas fa-arrow-right"></i></span>
              </Link>
            </li>
            <br></br>
            <li>
              Janthara Villa Resort - 5 minutes away from the venue
              <Link to="https://maps.app.goo.gl/k6iPdMX7py1vmbQ66" className="stay-link">
                <span className="stay-span">Visit <i className="fas fa-arrow-right"></i></span>
              </Link>
            </li>
            <br></br>
            <li>
              Chatkaew Hotel - 2 minutes away from the venue
              <Link to="https://maps.app.goo.gl/CJYpuDfdnjbSkRSq5" className="stay-link">
                <span className="stay-span">Visit <i className="fas fa-arrow-right"></i></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stay;
