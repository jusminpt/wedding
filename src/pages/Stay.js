import React from "react";
import Header from "../components/Header";

const Stay = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <h1>Where to Stay</h1>
        <p>
          Here are some hotels and accommodation options near the wedding venue:
        </p>
        <ul>
          <li>Hotel A - 5 minutes away from the venue</li>
          <li>Hotel B - 10 minutes away from the venue</li>
          <li>Airbnb options - Various listings close to the venue</li>
        </ul>
      </div>
    </div>
  );
};

export default Stay;
