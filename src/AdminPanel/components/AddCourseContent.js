import React,{useState,useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AddCourseContent = () => {

  const [Category, setCategory] = useState([]);
  useEffect(() => {
  
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
  }, [])

  // const{_id, courseCategoryName, courseType}=Category;


  const history=useHistory();
  const [element, setelement] = useState({ 
    courseCategory:"",
    courseName:"",
    courseFee:"",
    courseOverview:"",
    courseRequirments:"",
    courseDuration:"",
    courseShortDesc:"",
    courseImages:"",
    courseCompleteDesc:""

  })
  let name,value;
const getValue=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setelement({...element,[name]:value});
 console.log(element)
}
const Submitbtn=async(e)=>{
  e.preventDefault();
  const {courseCategory,  courseName,  courseOverview,  courseRequirments,  courseDuration,  courseShortDesc,  courseCompleteDesc,courseImages}=element;
  let login=JSON.parse(localStorage.getItem('admintoken'))
  console.log(login.admintoken)
  const res= await fetch('http://localhost:5000/admin/course/create',{
    method:"POST",
    headers:
    {
      "content-type":"application/json",
      "Authorization":`${login.admintoken}`
    },
    body:JSON.stringify({
      courseCategory:courseCategory,
    courseName:courseName,
    
    courseOverview:courseOverview,
    courseRequirments:courseRequirments,
    courseDuration:courseDuration,
    courseShortDesc:courseShortDesc,
    courseCompleteDesc:courseCompleteDesc,
    courseImages:courseImages

    })
  })
  const data= await res.json();
  if(res.status==500||!data){
    window.alert("Something went weong")
  }
  else{
    window.alert("Course added successfully");
    // history.push("/admin/allcourses")
  }
}

console.log(element)

 
{    return (
       
        <div className="d-flex flex-column content-wrapper"> 
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
            
              <div className="row">
              
                <div className="col-12 mb-4">
                 
                <form className="row g-3">


        <div className="col-md-6">
          <label  className="form-label">Category</label>
          <select id="inputState" name="courseCategory" onChange={getValue} className="form-select">
            <option defaultValue>Select any one</option>
          {Category.map((item)=>(
            <option key={item._id} value={item._id} >{item.courseCategoryName}</option>
            ))}

    
            
          </select>
        </div>

        <div className="col-md-6">
          <label  className="form-label">Course Title</label>
          <input type="text"  name="courseName" onChange={getValue} className="form-control"  />
        </div>
        <div className="col-12">
          <label className="form-label">Select Image</label>
          <input type="file" name="courseImages" onChange={getValue} className="form-control" id="inputAddress"  />
        </div>
       
    
        <div className="col-md-6">
          <label  className="form-label">Course Requirements</label>
          <input type="text" name="courseRequirments" onChange={getValue} className="form-control"  />
        </div>

        <div className="col-md-6">
          <label  className="form-label">Time Duration</label>
          <input type="text" name="courseDuration" onChange={getValue} className="form-control"  />
        </div>

        <div className="col-md-12">
          <label className="form-label">Course Overview</label>
          <input type="text" name="courseOverview" onChange={getValue} className="form-control"  />
        </div>

      
        <div className="col-12">
          <label  className="form-label">Short Description</label>
          
          <textarea className="form-control" name="courseShortDesc" onChange={getValue} id="des" rows="5"></textarea>
        </div>
        <div className="col-12">
          <label  className="form-label">Description</label>
          
          <textarea className="form-control" name="courseCompleteDesc" onChange={getValue} id="des" rows="5"></textarea>
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
          <button type="submit" onClick={Submitbtn} className="btn btn-success">Submit</button>
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
     
    )}
}

export default AddCourseContent
