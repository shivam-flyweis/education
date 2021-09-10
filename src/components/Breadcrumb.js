import React from 'react'
import { Link } from 'react-router-dom'
const Breadcrumb = () => {
    return (
        <>
            
    <div className="custom-breadcrumns border-bottom">
      <div className="container">
        <Link to="#">Home</Link>
        <span className="mx-3 icon-keyboard_arrow_right"></span>
        <span className="current">About Us</span>
      </div>
    </div>
        </>
    )
}

export default Breadcrumb
