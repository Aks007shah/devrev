import React from "react";
import logo from "../assets/Images/Dev-Revampp-logo.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="bg-dark border-top border-primary border-4 text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <Link to='/'>
            <img src={logo} width={100} alt="Dev-Revampp Logo" />
            </Link>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam laborum error! Sit, sequi quam.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@devrevampp.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Dev-Revampp. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
