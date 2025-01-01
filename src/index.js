import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const rootElement = document.getElementById('root');  // Ensure this matches the id in your index.html

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
