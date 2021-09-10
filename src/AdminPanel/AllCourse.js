import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ModalFade from './components/ModalFade'
import ScrollToTop from './components/ScrollToTop'
import Sidebar from './components/Sidebar'
import AdminNavbar from './components/AdminNavbar'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loadProduct} from '../redux/actions/productAction'
const AllCourse = () => {
  
  
  const [Courses, setCourses] = useState([]);
  const [Category, setCategory] = useState([]);
 

  useEffect(() => {
    let token=JSON.parse(localStorage.getItem('admintoken'))
    console.log(token.admintoken)
    fetch('http://localhost:5000/admin/course/find',{
      method:"GET",
      headers:
      {
        "content-type":"application/json",
        "Authorization":`${token.admintoken}`

      }
    }).then(
      (res)=>{
        
        res.json().then(
          
       (data)=>{ 
     
      setCourses(data)
      console.log(data) 
       }
        ).catch((err)=>{
          console.log(err )
        })
       
      }
      
    ).catch((err)=>{
   console.log(err)
  })
  console.log(Courses)


  fetch('http://localhost:5000/admin/course-category/find',{
      method:"GET",
      headers:
      {
        "content-type":"application/json"
        
      }
    }).then(
      (res)=>{
        
        res.json().then(
          
       (data)=>{ 
     
      setCategory(data)
      // console.log(data) 
       }
        ).catch((err)=>{
          console.log(err )
        })
       
      }
      
    ).catch((err)=>{
   console.log(err)
    })
    console.log(Category)

  }, [])



  useEffect(() => {
  
  
  }, [])

  const dispatch = useDispatch()


  const tranferData=(id)=>{
    dispatch(loadProduct(id))
  }
  

  let history=useHistory()
  let loginpermission=false;
  let login=JSON.parse(localStorage.getItem('admintoken'))
  if(login){
    loginpermission=login.login
    }
  if(loginpermission){

  
   
    return (
      <>
<div id="page-top">

<div id="wrapper" >

<Sidebar/>  


<div  className="d-flex flex-column content-wrapper"> 
        {/* Main Content */}
        <div className="content">
          {/* Topbar */}
          <AdminNavbar/>
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          
            </div>
           <div className='row'>


           {Courses.map((course)=>(
          
            <div className="col-lg-4 col-md-6 mb-4"  onClick={()=>tranferData(course._id)}>
            <div className="course-1-item">
              <figure className="thumnail">
                <Link to="/course"><img src="/images/course_1.jpg" alt="Image" className="img-fluid" /></Link>
                <div className="price">{course.courseType}</div>
                <div className="category"><h3>{Category._id==course.courseCategory?Category.courseCategoryName:"hello"}</h3></div>  
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
                <p><Link to="/course" className="btn btn-success rounded-0 px-4"  onClick={()=>tranferData(course._id)}>Enroll In This Course</Link></p>
              </div>
            </div>
          </div>



           ))}





            
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

 
</div>
<ScrollToTop/>  
<ModalFade/>  
</div>

          
      </>
  )
  }
  else{
    history.push('/adminlogin')
    return <></>
  }



 


}

export default AllCourse
