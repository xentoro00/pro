import Sidebar from './Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Client } from '../Client/Client'; 
import { Staff } from '../Staff/Staff';

export const Dashboard = () => {

  const [numClients, setNumClients] = useState(0);
  const [numStaff, setNumStaff] = useState(0); 

  useEffect(() => {
      axios.post('http://localhost:8080/getUsers')
          .then(res => {
              const fetchedUsers = res.data;
              setNumClients(fetchedUsers.length);
          })
          .catch(err => console.log(err));

      axios.post('http://localhost:8080/getStaff')
          .then(res => {
              const fetchedStaff = res.data;
              setNumStaff(fetchedStaff.length);
          })
          .catch(err => console.log(err));
  },
   []);
  


  return (
    <div>
      <main style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />

        <div className="container-fluid  ">
          <div className="row justify-content-center">
            <header>
              <h1>Dashboard</h1>
            </header>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-70 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className=" font-weight-bold text-success text-uppercase mb-1">
                          Client
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{numClients}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-users fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Staffs
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{numStaff}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-user fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Deposits
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-upload fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Withdrawals
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$1,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-download fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Transfers
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$90,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-random fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Wallet Balance
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-money-bill-alt  fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Account types
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Accounts
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-users fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}


        </div>
      </main>
    </div>



  );
}