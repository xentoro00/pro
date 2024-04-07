import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap'; // Importoni Dropdown nga react-bootstrap
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Sidebar() {

  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8080')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username);
          setRole(res.data.role);
          console.log(res.data.role);
        } else {
          navigate('/login')
        }
      })
      .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(res => {
        if (res.data.success) {
          navigate('/Alogin');
        } else {
          // Handle logout failure
        }
      })
      .catch(err => {
        // Handle errors
      });
  };
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '300px', height: '100%' }}>

        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
          <i className=" bi me-2 fas fa-university fa-2x text-gray-300" ></i>

          <span className="fs-4">E-Banking</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {role !== 'user' &&
            <><li>
              <a href="/dashboard" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-dashboard fa-1x text-gray-300"></i>
              Dashboard
            </a>
          </li><li>
              <Dropdown>

                <Dropdown.Toggle variant="link" id="dropdown-clients" className="nav-link link-dark">
                  <i className=" bi me-2 fas fa-user fa-1x text-gray-300 bg-light"></i>
                  Clients
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/addclient">Add Client</Dropdown.Item>
                  <Dropdown.Item href="/client">Manage Clients</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </li></>
          }
          {role !== 'staff' || role !== 'user' &&
          <li>
            <Dropdown>
              
              <Dropdown.Toggle variant="link" id="dropdown-clients" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-user fa-1x text-gray-300 bg-light" ></i>
                Staff
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/addstaff">Add Staff</Dropdown.Item>
                <Dropdown.Item href="/staff">Manage Staff</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          }

          {role !== 'user' &&
            <><li>
              <a href="/ContactUs" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-user fa-1x text-gray-300"></i>

              ContactUs
            </a>
          </li><li>
              <Dropdown>

                <Dropdown.Toggle variant="link" id="dropdown-clients" className="nav-link link-dark">
                  <i className=" bi me-2 fas fa-user-secret fa-1x text-gray-300 bg-light"></i>
                  Accounts

                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/addacc">Add Acc</Dropdown.Item>
                  <Dropdown.Item href="/acc">Manage Acc</Dropdown.Item>
                  <Dropdown.Item href="/openacc">Open acc</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </li></>
          }
          <li>
            <a href="#" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-money-bill-wave fa-1x text-gray-300" ></i>

              Finances
            </a>
          </li>
          <li>Advanced Modules</li>
          <li>
            <a href="#" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-exchange-alt fa-1x text-gray-300" ></i>

              Transactions History
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-chart-line fa-1x text-gray-300" ></i>

              Financial Reports
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <i className=" bi me-2 fas fa-cogs fa-1x text-gray-300" ></i>

              System Settings
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark" onClick={handleLogout}> 
              <i className=" bi me-2 fas fa-sign-out-alt fa-1x text-gray-300" ></i>

              Log Out
            </a>
          </li>
        </ul>
        <hr />
     
        <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-clients" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-user"></i></svg>
                Clients
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/signout">Sign Out</Dropdown.Item>
                <Dropdown.Item href="/ContactUs">ContactUs</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>


      </div>
    </div>
  );
}
