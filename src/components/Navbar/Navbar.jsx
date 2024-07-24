import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <div className="container-fluid col-4">
          <Link className="navbar-brand" to="#">Book.com</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar-nav col-4 right-nav">
            <span className="nav-item nav-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
            <span className="nav-item nav-link">
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Enable Light mode' : 'Enable Dark mode'}</label>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
