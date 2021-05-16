import React from 'react';
import ReactDOM from 'react-dom';
import ChangeName from './components/changeName';
import ChangeVisivility from './components/changeVisibility';
import Counter from './components/counter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChangeName />
    <hr />
    <ChangeVisivility />
    <hr />
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
