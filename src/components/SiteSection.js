import React from 'react'
import { Link } from 'react-router-dom'
const SiteSection = () => {
    return (
        <>
                  <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5">
                <h2 className="section-title-underline mb-5">
                  <span>Why Academics Works</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-logo">
                    <span className="flaticon-mortarboard text-white" />
                  </div>
                  <div className="feature-1-content">
                    <h2>Personalize Learning</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                    <p><Link to="#" className="btn btn-success px-4 rounded-0">Learn More</Link></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-logo">
                    <span className="flaticon-school-material text-white" />
                  </div>
                  <div className="feature-1-content">
                    <h2>Trusted Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                    <p><Link to="#" className="btn btn-success px-4 rounded-0">Learn More</Link></p>
                  </div>
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-logo">
                    <span className="flaticon-library text-white" />
                  </div>
                  <div className="feature-1-content">
                    <h2>Tools for Students</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                    <p><Link to="#" className="btn btn-success px-4 rounded-0">Learn More</Link></p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default SiteSection
