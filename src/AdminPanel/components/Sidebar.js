import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
  
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          {/* <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">

          <img src="images/logo.jpg" alt="Image" className="img-fluid" />
            
          </Link> */}


<Link to="/admin" style=
                  {{height:"4.5rem"}} className="d-block">
                  <img src="/images/logo.jpg" style=
                  {{width:"100%", height:"100%"}} alt="Image" className="img-fluid" />
                </Link>

         
          <hr className="sidebar-divider my-0" />
        
          <li className="nav-item active">
            <Link className="nav-link" to="/admin">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span></Link>
          </li>
        
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/allcourses" >
              
              <span>All Courses</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/courseCategory" >
              
              <span>Course Category</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/addcourse" >
              
              <span>Add Courses</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/addcoursefee" >
              
              <span>Add Course Fee</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/admin/editcourse">
              
              <span>Edit Course</span>
            </Link>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <Link className="collapse-item" to="utilities-color.html">Colors</Link>
                <Link className="collapse-item" to="utilities-border.html">Borders</Link>
                <Link className="collapse-item" to="utilities-animation.html">Animations</Link>
                <Link className="collapse-item" to="utilities-other.html">Other</Link>
              </div>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Addons
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </Link>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link className="collapse-item" to="/adminlogin">Login</Link>
                <Link className="collapse-item" to="register.html">Register</Link>
                <Link className="collapse-item" to="forgot-password.html">Forgot Password</Link>
                <div className="collapse-divider" />
                <h6 className="collapse-header">Other Pages:</h6>
                <Link className="collapse-item" to="404.html">404 Page</Link>
                <Link className="collapse-item" to="blank.html">Blank Page</Link>
              </div>
            </div>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <Link className="nav-link" to="charts.html">
              <i className="fas fa-fw fa-chart-area" />
              <span>Charts</span></Link>
          </li>
          {/* Nav Item - Tables */}
          <li className="nav-item">
            <Link className="nav-link" to="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span></Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Message */}
         </ul>
      );
}

export default Sidebar
