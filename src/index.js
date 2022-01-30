import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './utils/UserContext';
import './utils/styles/index.css';
import App from './pages/App';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
