import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Page1';
import { Dashboard } from './admin/Dashboard';
import { Client } from './admin/Client';
import { Staff } from './admin/Staff';
import 'bootstrap/dist/css/bootstrap.min.css';



import Login from './Login'
import Signup from './Signup'
import Alogin from './Alogin'
import Stafflogin from './Stafflogin'
import AddClient from './admin/AddClient';
import Addstaff from './admin/Addstaff';
import EditStaff from './admin/EditStaff';
import ContactUs from './admin/ContactUs'







function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Page1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/stafflogin" element={<Stafflogin />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/addstaff" element={<Addstaff />} />
        <Route path="/editstaff" element={<EditStaff />} />
        <Route path="/ContactUs" element={<ContactUs />} />






        



      </Routes>
    </BrowserRouter>
  );
}

export default App;
