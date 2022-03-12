import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from "./Clock";
import {Toggle} from "./Toggle";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock/>
    <Toggle/>
  </React.StrictMode>,
  document.getElementById('root')
);

