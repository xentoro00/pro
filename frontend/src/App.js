import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Page1';
// import { LoginForm as Login } from './LoginForm';
import { Dashboard } from './admin/Dashboard';
import Login from './Login'
import Signup from './Signup'
import Alogin from './Alogin'



function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Page1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alogin" element={<Alogin />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
