import React,{useState,useEffect,useContext} from 'react'
import {ProductidContext} from '../App'
import { a, Link, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
const CourseSingleContent = () => {
  const productId =useContext(ProductidContext);
  const [Course, setCourse] = useState([]);
  const params=useParams()
  const id = params.id
  console.log(id);

  useEffect(() => {
    
  fetch(`http://localhost:5000/student/course/find/${params.id}`,{
    method:"GET",
    headers:
    {
      "content-type":"application/json",
     

    }
  }).then(
    (res)=>{
      
      res.json().then(
        
     (data)=>{ 
   
    setCourse(data)
    // console.log(data) 
     }
      ).catch((err)=>{
        console.log(err )
      })
     
    }
    
  ).catch((err)=>{
 console.log(err)
  })


}, [])

const productData = useSelector(state => state.product.singleData)


    return (
        <>
              <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <p>
                <img src="images/course_5.jpg" alt="Image" className="img-fluid" />
              </p>
            </div>
            <div className="col-lg-5 ml-auto align-self-center">
              <h2 className="section-title-underline mb-5">
                <span className="fs-4">Course Details</span>
              </h2>
              <h3>{productData.courseName}</h3>
              <h4 className="mb-5"><strong className="text-black d-block">Hours:</strong>{productData.courseDurasion}</h4>
              <p>{productData.courseCompleteDesc}</p>
              
              <ul className="ul-check primary list-unstyled mb-5">
                <li>Course id : {productData._id}</li>
                <li>{productData.courseOverview}</li>
                <li>{productData.courseRequirments}</li>
               
              </ul>
              <p>
                <Link to="#" className="btn btn-success rounded-0 btn-lg px-5">Enroll</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default CourseSingleContent
