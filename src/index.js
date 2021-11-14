import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";
import A from "./components/A";
import A2 from "./components/A2";

ReactDOM.render(
  <React.StrictMode>
      {/*<App />*/}
      {/*<Example1 />*/}
      {/*<Example2 />*/}
      {/*<Example3 />*/}
      {/*<Example4 />*/}
      {/*<Example5 />*/}
      {/*<Example6 />*/}
      {/*<A />*/}
      <A2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
