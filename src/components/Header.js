import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  px-5">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src="images/logo.jpg" alt="Image" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/admission">
                Admissions
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
               Courses
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
           
            
          </ul>
          <div className="ml-auto">
                <div className="social-wrap">
                  <Link className="social-links" to="#"><span className="icon-facebook" /></Link>
                  <Link className="social-links" to="#"><span className="icon-twitter" /></Link>
                  <Link className="social-links" to="#"><span className="icon-linkedin" /></Link>
                  <Link className="social-links" to="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></Link>
                </div>
              </div>
           
        </div>
      </nav>
    </>
  );
}

export default Header
