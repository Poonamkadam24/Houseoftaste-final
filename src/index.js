import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import { BrowserRouter } from 'react-router-dom';
// import Index from './components/homepage';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App1/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

