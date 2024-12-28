import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <footer className="sticky-footer">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 text-center">
          <Link to="/" className="d-flex flex-column align-items-center">
            <i className="fas fa-home mb-1"></i>
            <span>Home</span>
          </Link>
        </div>
        <div className="p-3 text-center">
          <Link to="/location" className="d-flex flex-column align-items-center">
            <i className="fas fa-map-marker-alt mb-1"></i>
            <span>Location</span>
          </Link>
        </div>
        <div className="p-3 text-center">
          <Link to="/stay" className="d-flex flex-column align-items-center">
            <i className="fas fa-bed mb-1"></i>
            <span>Stay</span>
          </Link>
        </div>
        <div className="p-3 text-center">
          <Link
            to="/things-to-do"
            className="d-flex flex-column align-items-center"
          >
            <i className="fas fa-clipboard-list mb-1"></i>
            <span>Activities</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
