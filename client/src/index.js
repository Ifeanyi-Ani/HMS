import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { Store } from './redux/Store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
