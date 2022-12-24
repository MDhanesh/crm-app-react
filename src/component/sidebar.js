import React from "react";
import { Link } from "react-router-dom";
import undraw_rocket from "./img/undraw_rocket.svg";
export default function Sidebar() {
  return (
    <>
      {/* 
        <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-building"></i>
          </div>
          <div className="sidebar-brand-text mx-3">CRM</div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>

            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* 
            <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed "
            href="#collapseTwo"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-users"></i>
            <span>Customers</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              id="collapseTwo"
            >
              <h6 className="collapse-header">Customer:</h6>
              <Link className="collapse-item" to="/customer">
                Add Customers
              </Link>
              <Link className="collapse-item" to="/customerdata">
                Customer List
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseUtilities"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Leads</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              id="collapseUtilities"
            >
              <h6 className="collapse-header">Custom Lead:</h6>
              <Link className="collapse-item" to="/lead">
                Add Lead
              </Link>
              <Link className="collapse-item" to="/leaddata">
                Lead Data
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Add services</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#collapsePages"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-cog"></i>
            <span>Services</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div
              className="bg-white py-2 collapse-inner rounded"
              id="collapsePages"
            >
              <h6 className="collapse-header"></h6>
              <Link className="collapse-item" to="/services">
                Request services
              </Link>

              <Link className="collapse-item" to="/servicesdata">
                services List
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        {/* <li className="nav-item">
          <Link className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>

            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        {/* <li className="nav-item">
          <Link className="nav-link">
            <i className="fas fa-fw fa-table"></i>

            <span>Tables</span>
          </Link>
        </li>  */}

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}
