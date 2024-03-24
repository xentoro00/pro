import React from 'react';

export default function Sidebar() {
  return (
    <div>
      <main style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '300px' }}>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="16" height="16"><i className="fas fa-university"></i></svg>
            <span className="fs-4">E-Banking</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-tachometer-alt"></i></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-user"></i></svg>
                Account
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-users"></i></svg>
                Staff
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-user"></i></svg>
                Accounts
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-money-bill-wave"></i></svg>
                Finances
              </a>
            </li>
            <li>Advanced Modules</li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-exchange-alt"></i></svg>
                Transactions History
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-chart-line"></i></svg>
                Financial Reports
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-cogs"></i></svg>
                System Settings
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16"><i className="fas fa-sign-out-alt"></i></svg>
                Log Out
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>user</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              





              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div> 
        </div>
        

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
                        <div className="h5 mb-0 font-weight-bold text-gray-800">40</div>
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
                        <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
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