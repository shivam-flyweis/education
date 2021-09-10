import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router'
 
import {useDispatch} from 'react-redux'
import {loadProduct} from '../redux/actions/productAction'
import { Link } from 'react-router-dom'


const CoursesMainContent = () => {
 const params=useParams()
  const [Courses, setCourses] = useState([]); 
  const [Category, setCategory] = useState([]);
  const [dataLimit, setDataLimit] = useState(6);
  const [pages] = useState(Math.round(Courses.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const pageLimit=5;

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  function goToNextPage() {
    if(!(currentPage<1 && currentPage>pages)){

      return setCurrentPage((page) => page + 1);
    }
    
  }

  function goToPreviousPage() {
    if(!(currentPage<1&& currentPage>pages)){

      return setCurrentPage((page) => page - 1);
    }
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    if(!(pageNumber<1 && pageNumber>pages)){

      return   setCurrentPage(pageNumber);
    }
    
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return Courses.slice(startIndex, endIndex);
  };


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
     
      setCourses(data)
      // console.log(data) 
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

  }, [])

  const dispatch = useDispatch()


  const tranferData=(id)=>{
    dispatch(loadProduct(id))
  }

    return (
        <>
           
      <div className="site-section">
        <div className="container">
          <div className="row">
        

          {getPaginatedData().map((course, idx)=>{
          
            return (
              <div  className="col-lg-4 col-md-6 mb-4" onClick={()=>tranferData(course._id)} key={idx} >
              <div className="course-1-item">
                <figure className="thumnail">
                  <Link to={`/course`}><img src="/images/course_1.jpg" alt="Image" className="img-fluid" /></Link>
                  <div className="price">{course.courseType}</div>
                  <div className="category"><h3>{Category._id==course.courseCategory?Category.courseCategoryName:""}</h3></div>  
                </figure>
                <div className="course-1-content pb-4">
                  <h2>{course.courseName}</h2>
                  <div className="rating text-center mb-3">
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                    <span className="icon-star2 text-warning" />
                  </div>
                  <p className="desc mb-4">{course.courseShortDesc}</p>
                  <p><Link to={`/course`} className="btn btn-success rounded-0 px-4">Enroll In This Course</Link></p>
                </div>
              </div>
            </div>
)})}

         
          </div>
          <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      {/* <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button> */}
        <button
        onClick={goToNextPage}
        className={  `next ${currentPage == pages ? 'disabled' : ''}`}
         style={{  background: "#fff",
          border: "none",
          padding: "10px",
          color: "blue",
          boxShadow: '0 0 3px rgba(0, 0, 0, 0.4)',
          margin:' 0 10px',
          cursor: 'pointer'}}
         >
        next
      </button>
      
    </div>
          
        </div>
      </div> 
        </>
    )
}

export default CoursesMainContent
