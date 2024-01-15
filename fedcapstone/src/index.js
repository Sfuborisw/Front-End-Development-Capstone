import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Apply styles directly here
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = 'Arial, sans-serif';

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '30px',
};

root.render(
  <React.StrictMode>
    <div style={containerStyle}>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
