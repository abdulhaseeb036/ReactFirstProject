import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap 

// >>
//react main jb css file attach  krni hoty import krty is tarha.
import './index.css';
// <<<

// >>>
// aik App ki file import ho rhi hy app.js may aik function hy app
// k name sy wo sirf import ho rha check krlo src may app.js 
//may ja kr.
import App from './App';
// <<<

// >>>
// means k serviceworker.js may jitny bhi code hy sb import krdey ga is file may * means all.
import * as serviceWorker from './serviceWorker';
// <<<

// >>
// ReactDom hamain btata kn sa function kya cheez hamin render krni hy kon sa component render
// krna do cheezain leta hy k sa componet render krna or kahan render kra hy.
ReactDOM.render(
  // kn sa component render krna hy
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // kahan render krna hy
  document.getElementById('root')
);
// <<

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
