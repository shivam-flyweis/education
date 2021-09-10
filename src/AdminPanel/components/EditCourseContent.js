import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Link } from 'react-router-dom'

const EditCourseContent = () => {
    return (
       
        <div  className="d-flex flex-column content-wrapper"> 
          {/* Main Content */}
          <div class="content">
            {/* Topbar */}
            <AdminNavbar/>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            
              </div>
            
              <div className="row">
              
                <div className="col-12 mb-4">
                 
                <form className="row g-3">


        <div className="col-md-6">
          <label  className="form-label">Category</label>
          <select id="inputState" className="form-select">
            <option selected>Web Development</option>
            <option>App Development</option>
            <option>Software Development</option>
          </select>
        </div>

        <div className="col-md-6">
          <label  className="form-label">Course Title</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label className="form-label">Select Image</label>
          <input type="file" className="form-control" id="inputAddress"  />
        </div>
        <div className="col-md-6">
          <label  className="form-label">Course Price</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Course Rating</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label  className="form-label">Teacher Name</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-md-6">
          <label  className="form-label">Time</label>
          <input type="text" className="form-control" id="inputPassword4" />
        </div>



      
        <div className="col-12">
          <label  className="form-label">Description</label>
          
          <textarea class="form-control" id="des" rows="5"></textarea>
        </div>
       
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
   
                 
                </div>
              </div>
            </div>
            
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
     
    )
}

export default EditCourseContent
