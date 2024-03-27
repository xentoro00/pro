import React from 'react';

export default function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '300px', height: '100%' }}>
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
            <a href="./client" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><i className="fas fa-user"></i></svg>
              Clients
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

    </div>
  );
}