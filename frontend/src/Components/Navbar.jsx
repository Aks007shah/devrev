import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Dev-Revampp-logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-primary border-4 text-white fixed-top mb-5">

        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand text-white" to="#">
            <img width={100} src={logo} alt="Dev Revampp logo" />
          </Link>
          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {/* Home */}
              <li className="nav-item">
                <Link className="nav-link active text-white" to="#">
                  Home
                </Link>
              </li>
              {/* About Us */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  About Us
                </Link>
              </li>
              {/* Team */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  Team
                </Link>
              </li>
              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <div className="dropdown-menu p-3">
                  <div className="d-flex border border-2">
                    {/* Digital Marketing Column */}
                    <div className="me-5">
                      <h6 className="dropdown-header text-primary">Digital Marketing</h6>
                      <ul className="list-unstyled">
                        <li>
                          <Link className="dropdown-item" to="#">
                            SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            PPC
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            SMO
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Software Development Column */}
                    <div>
                      <h6 className="dropdown-header text-primary">Software Development</h6>
                      <ul className="list-unstyled">
                        <li>
                          <Link className="dropdown-item" to="#">
                            App Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Website Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Contact Us Link */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
