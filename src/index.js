import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import LogRocket from "logrocket"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// init log rocket only if the app is running in production
const hostname = window.location.hostname
if (hostname !== "localhost" || hostname !== "127.0.0.1") {
  LogRocket.init("edjldi/type-test")
}
