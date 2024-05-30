import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Preloader from './Components/Preloader';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Preloader/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
