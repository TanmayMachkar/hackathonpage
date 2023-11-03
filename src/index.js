import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import ParticlesBg from 'particles-bg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class = 'myclass'> 
    <App />
    <ParticlesBg color="#000000" num={100} type="cobweb" bg={true} />  
  </div>
);
reportWebVitals();