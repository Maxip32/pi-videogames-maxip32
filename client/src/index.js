import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
