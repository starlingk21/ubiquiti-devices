import React from 'react';
import ReactDOM from 'react-dom/client';
import Devices from './views/Devices';
import './index.css';
import FetchDevices from './context/FetchDevices';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FetchDevices>
      <Devices />
    </FetchDevices>
  </React.StrictMode>
);
