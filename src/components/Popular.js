import React,{useState,useEffect,useContext} from 'react'
import {ProductidContext} from '../App'
import {  Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loadProduct} from '../redux/actions/productAction'
const Popular = ({setProductId}) => {
  // const setProductId =useContext(ProductidContext);
  const [Courses, setCourses] = useState([]);
  const [Category, setCategory] = useState([]);
  const active=document.getElementById('idx0');
  // console.log(setProductId)
  
            
  useEffect(() => {
   
    fetch('http://localhost:5000/student/course/find',{
      method:"GET",
      headers:
      {
        "content-type":"application/json",
      }
    }).then(
      (res)=>{
          res.json().then(
           (data)=>{ 
            // console.log(`data are${data}`)
      setCourses(data)
     
       }
        ).catch((err)=>{
          console.log(err )
        })
       
      }
      
    ).catch((err)=>{
   console.log(err)
    })


    
 
    fetch('http://localhost:5000/student/course-category/find',{
      method:"GET",
      headers:
      {
        "content-type":"application/json"
        
      }
    }).then(
      (res)=>{
        // console.log(`res are${res}`)
        res.json().then(
          (data)=>{ 
            // console.log(`data are${data}`)
      
      setCategory(data)
      
       }
        ).catch((err)=>{
          console.log(err )
        })
       
      }
      
    ).catch((err)=>{
   console.log(err)
    })
    console.log(`categories are${Category}`)
  },[])

  const dispatch =useDispatch()


  const HandlerSubmit=(id)=>{
    dispatch(loadProduct(id))
  }


    return (
        <>
            
    <div className="site-section">
      <div className="container">


        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-6 mb-5">
            <h2 className="section-title-underline mb-3">
              <span>Popular Courses</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, id?</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
         
        {Courses.map((course,idx)=>{
          if(active){
            active.classList.add("active");
          }
          return   <div className="carousel-item" id={`idx${idx}`} key={course._id}  onClick={()=>HandlerSubmit(course._id)}>
            <div className=" d-flex justify-content-around align-content-center">
             <figure className="thumnail">
               <div className="category"><h3>{Category._id==course.courseCategory?Category.courseCategoryName:""}</h3></div>  
               <Link to={`/course`}><img src="/images/course_1.jpg" style={{width:"25rem" ,height:"20rem"}} alt="Image" className="img-fluid"/></Link>
               
             </figure>
             <div className="course-1-content pb-4 d-flex flex-column justify-content-center">
              <h2>{course.courseName}</h2>
               <div className="rating text-center d-flex justify-content-start mb-3">
                 <span className="icon-star2 text-warning"></span>
                 <span className="icon-star2 text-warning"></span>
                 <span className="icon-star2 text-warning"></span>
                 <span className="icon-star2 text-warning"></span>
                 <span className="icon-star2 text-warning"></span>
               </div>
               <p className="desc mb-4">{course.courseShortDesc}</p>
               <div className="price mb-3"><strong>${course.courseFee}</strong></div>
               <p><Link to={`/course`} className="btn btn-success rounded-0 px-4">Enroll In This Course</Link></p>
             </div>
           </div>
            </div>
             
             
            
             
           
    

          
 
        })}  
         
         
        
        </div>
        <Link className="carousel-control-prev"  to="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </Link>
      </div>



              <div className="owl-slide-3 owl-carousel">
         

    

             



                
              </div>
      
          </div>
        </div>

        
        
      </div>
    </div>

        </>
    )
}

export default Popular
