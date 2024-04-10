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

import ContactForm from './ContactUs/ContactForm';
import Page2 from './Home/Page2';

import AddAcc from './admin/Accounts/AddAcc';
import Acc from './admin/Accounts/Acc';
import OpenAcc from './admin/Accounts/OpenAcc';
import OpenAction from './admin/Accounts/OpenAction';


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

        <Route path="/Page2" element={<Page2 />} />

        <Route path="/AddAcc" element={<AddAcc />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/OpenAcc" element={<OpenAcc />} />
        <Route path="/OpenAction" element={<OpenAction />} />
        



      </Routes>
    </BrowserRouter>
  );
}

export default App;
