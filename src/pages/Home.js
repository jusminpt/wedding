import React from 'react';
import './Home.css'
import invitation1 from '../images/invitation_1.png'

const Home = () => {
  return (
    <div className='main-content'>
      <div className="text-center">
      <img src={invitation1} className="img-fluid" alt='invitaion'/>
      </div>
    </div>
  );
};

export default Home;
