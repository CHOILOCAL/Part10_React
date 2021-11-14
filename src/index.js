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
import Example7 from "./components/Example7";
import A from "./components/A";
import A2 from "./components/A2";
import PersonContext from "./contexts/PersonContext";
import Example8 from "./components/Example8";

const persons = [
    {id: 0, name: 'Mark', age: 30},
    {id: 1, name: 'Hanna', age: 28},
    {id: 2, name: 'HYunji', age: 26},
]
ReactDOM.render(
  <React.StrictMode>
      <PersonContext.Provider value={persons}>
      {/*<App />*/}
      {/*<Example1 />*/}
      {/*<Example2 />*/}
      {/*<Example3 />*/}
      {/*<Example4 />*/}
      {/*<Example5 />*/}
      {/*<Example6 />*/}
      {/*<A />*/}
      {/*<A2 />*/}
      <Example7 />
      <Example8 />
      </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
