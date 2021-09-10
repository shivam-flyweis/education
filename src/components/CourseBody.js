import React from 'react'
import { Link } from 'react-router-dom'
const CourseBody = () => {
    return (
        <>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="course-1-item">
                <figure className="thumnail">
                  <Link to="/course"><img src="images/course_6.jpg" alt="Image" className="img-fluid" /></Link>
                  <div className="price">$99.00</div>
                  <div className="category"><h3>Mobile Application</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2>How To Create Mobile Apps Using Ionic</h2>
                  <div className="rating text-center mb-3">
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                  </div>
                  <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                  <p><Link to="/course" className="btn btn-success rounded-0 px-4">Enroll In This Course</Link></p>
                </div>
              </div>
            </div>
        </>
    )
}

export default CourseBody
