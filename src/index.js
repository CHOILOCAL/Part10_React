import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

ReactDOM.render(
  <React.StrictMode>
      <Example1 />
      <Example2 />
      <Example3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
