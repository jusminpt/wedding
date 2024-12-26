import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Footer() {
  return (
    <footer className="sticky-footer">
      <div className="d-flex justify-content-center">
        <div className="p-3">
          <Link to="/" className="d-flex align-items-center">
            <i className="fas fa-home mr-2"></i> Home
          </Link>
        </div>
        <div className="p-3">
          <Link to="/location" className="d-flex align-items-center">
            <i className="fas fa-map-marker-alt mr-2"></i> Location
          </Link>
        </div>
        <div className="p-3">
          <Link to="/stay" className="d-flex align-items-center">
            <i className="fas fa-bed mr-2"></i> Stay
          </Link>
        </div>
        <div className="p-3">
          <Link to="/things-to-do" className="d-flex align-items-center">
            <i className="fas fa-clipboard-list mr-2"></i> Activities
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
