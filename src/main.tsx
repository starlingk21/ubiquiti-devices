import React from 'react';
import ReactDOM from 'react-dom/client';
import Devices from './views/Devices';
import './assets/css/index.css';
import FetchDevices from './context/FetchDevices';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/DevicesUtility/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FetchDevices>
        <Header />
        <Devices />
      </FetchDevices>
    </BrowserRouter>
  </React.StrictMode>
);
