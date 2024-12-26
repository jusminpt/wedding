import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for React Router v6
import Home from './pages/Home';
import Location from './pages/Location';
import Stay from './pages/Stay';
import ThingsToDo from './pages/ThingsToDo';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <Router> {/* Only one Router component here */}
      <div className="App">
        {/* Main content */}
        <Routes> {/* Use Routes instead of Switch in v6 */}
          <Route path="/" element={<Home />} /> {/* Default route for Home */}
          <Route path="/location" element={<Location />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
        </Routes>

        {/* Footer with navigation links */}
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
