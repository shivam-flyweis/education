import React from 'react'
import { Link } from 'react-router-dom'
const error = () => {
    return (
        <>
                 <div style={{height:"100vh", width:"100vw"}} className="container-fluid d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="error mx-auto" data-text={404}>404</div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">It looks like you found Link glitch in the matrix...</p>
          <Link to="/">← Back to Dashboard</Link>
        </div>
      </div>
        </>
    )
}

export default error
