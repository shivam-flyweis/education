import React from 'react'
import {  Link } from 'react-router-dom'
const NewsUpdates = () => {
    return (
        <>
                <div className="news-updates">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-heading">
                  <h2 className="text-black">News &amp; Updates</h2>
                 <span className="green-link"> <Link to="#">Read All News</Link> </span>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="post-entry-big">
                      <Link to="/news" className="img-link"><img src="images/blog_large_1.jpg" alt="Image" className="img-fluid" /></Link>
                      <div className="post-content">
                        <div className="post-meta"> 
                          <Link to="#">June 6, 2019</Link>
                          <span className="mx-1">/</span>
                          <Link to="#">Admission</Link>, <Link to="#">Updates</Link>
                        </div>
                        <h3 className="post-heading"><Link to="news-single.html">Campus Camping and Learning Session</Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="post-entry-big horizontal d-flex mb-4">
                      <Link to="/news" className="img-link mr-4"><img src="images/blog_1.jpg" alt="Image" className="img-fluid" /></Link>
                      <div className="post-content">
                        <div className="post-meta">
                          <Link to="#">June 6, 2019</Link>
                          <span className="mx-1">/</span>
                          <Link to="#">Admission</Link>, <Link to="#">Updates</Link>
                        </div>
                        <h3 className="post-heading"><Link to="news-single.html">Campus Camping and Learning Session</Link></h3>
                      </div>
                    </div>
                    <div className="post-entry-big horizontal d-flex mb-4">
                      <Link to="/news" className="img-link mr-4"><img src="images/blog_2.jpg" alt="Image" className="img-fluid" /></Link>
                      <div className="post-content">
                        <div className="post-meta">
                          <Link to="#">June 6, 2019</Link>
                          <span className="mx-1">/</span>
                          <Link to="#">Admission</Link>, <Link to="#">Updates</Link>
                        </div>
                        <h3 className="post-heading"><Link to="news-single.html">Campus Camping and Learning Session</Link></h3>
                      </div>
                    </div>
                    <div className="post-entry-big horizontal d-flex mb-4">
                      <Link to="/news" className="img-link mr-4"><img src="images/blog_1.jpg" alt="Image" className="img-fluid" /></Link>
                      <div className="post-content">
                        <div className="post-meta">
                          <Link to="#">June 6, 2019</Link>
                          <span className="mx-1">/</span>
                          <Link to="#">Admission</Link>, <Link to="#">Updates</Link>
                        </div>
                        <h3 className="post-heading"><Link to="news-single.html">Campus Camping and Learning Session</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="section-heading">
                  <h2 className="text-black">Campus Videos</h2>
                  <span className="green-link"> <Link to="#">View All Videos</Link> </span>
                </div>
                <Link to="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox data-ratio={2}>
                  <span className="play">
                    <span className="icon-play" />
                  </span>
                  <img src="images/course_5.jpg" alt="Image" className="img-fluid" />
                </Link>
                <Link to="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox data-ratio={2}>
                  <span className="play">
                    <span className="icon-play" />
                  </span>
                  <img src="images/course_5.jpg" alt="Image" className="img-fluid" />
                </Link>
              </div>
            </div>
          </div>
        </div> 
        </>
    )
}

export default NewsUpdates
