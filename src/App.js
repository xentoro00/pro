import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './Home/Page1';
import { Dashboard } from './admin/Dashboard/Dashboard';
import { Client } from './admin/Client/Client';
import { Staff } from './Staff/Staff';



import Login from './LoginSignup/Login'
import Signup from './LoginSignup/Signup'
import Alogin from './admin/Alogin'
import Stafflogin from './Staff/Stafflogin'
import AddClient from './admin/Client/AddClient';
import Addstaff from './Staff/Addstaff';
import EditStaff from './Staff/EditStaff';
import ContactUs from './ContactUs/ContactUs'
import EditClient from './admin/Client/EditClient';
import ContactForm from './ContactUs/ContactForm'










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
        <Route path="/editclient" element={<EditClient />} />
        <Route path="/ContactForm" element={<ContactForm />} />










        



      </Routes>
    </BrowserRouter>
  );
}

export default App;
