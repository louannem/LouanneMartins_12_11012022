import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './utils/UserContext'
import './utils/styles/index.css'


import Homepage from './pages/Homepage'
import Profile from './pages/Profile'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/dashboard" element={<Profile />}/>
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
