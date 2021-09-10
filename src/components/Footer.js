import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
                 <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 green-link">
                <p className="mb-4"><img src="images/logo.png" alt="Image" className="img-fluid" /></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>  
                <p><Link to="#">Learn More</Link></p>
              </div>
              <div className="col-lg-3 ">
                <h3 className="footer-heading"><span>Our Campus</span></h3>
                <ul className="list-unstyled green-link">
                  <li><Link to="#">Acedemic</Link></li>
                  <li><Link to="#">News</Link></li>
                  <li><Link to="#">Our Interns</Link></li>
                  <li><Link to="#">Our Leadership</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  <li><Link to="#">Human Resources</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3 className="footer-heading"><span>Our Courses</span></h3>
                <ul className="list-unstyled green-link">
                  <li><Link to="#">Math</Link></li>
                  <li><Link to="#">Science &amp; Engineering</Link></li>
                  <li><Link to="#">Arts &amp; Humanities</Link></li>
                  <li><Link to="#">Economics &amp; Finance</Link></li>
                  <li><Link to="#">Business Administration</Link></li>
                  <li><Link to="#">Computer Science</Link></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3 className="footer-heading"><span>Contact</span></h3>
                <ul className="list-unstyled green-link">
                  <li><Link to="#">Help Center</Link></li>
                  <li><Link to="#">Support Community</Link></li>
                  <li><Link to="#">Press</Link></li>
                  <li><Link to="#">Share Your Story</Link></li>
                  <li><Link to="#">Our Supporters</Link></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="copyright ">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart green-link" aria-hidden="true" /> by <span className="green-link"> <Link to="https://colorlib.com green-link" target="_blank">Colorlib</Link></span>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer
