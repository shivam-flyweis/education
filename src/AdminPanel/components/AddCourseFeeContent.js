import React,{useState,useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AddCourseFeeContent = () => {

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


  
  const [Courses, setCourses] = useState([]);
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

  console.log(Courses)

  // const{_id, courseCategoryName, courseType}=Category;


  const history=useHistory();
  const [Fee, setFee] = useState({ 
    courseCategory:"",
    courseName:"",
    courseFee:"", 
    cgst:"",
    sgst:"",
    igst:"",
    taxAmount:"",
    totalAmount:""

  })
  let name,value;
const getValue=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setFee({...Fee,[name]:value});
 console.log(Fee)
}
const Submitbtn=async(e)=>{
  e.preventDefault();
  const {   courseCategory,
    courseName,
    courseFee, 
    cgst,
    sgst,
    igst,
    taxAmount,
    totalAmount}=Fee;
  let token=JSON.parse(localStorage.getItem('admintoken'))
  console.log(token.admintoken)
  const res= await fetch('http://localhost:5000/admin/course-fee/create',{
    method:"POST",
    headers:
    {
      "content-type":"application/json",
      "Authorization":`${token.admintoken}`
    },
    body:JSON.stringify({
        courseCategory:courseCategory,
        courseName:courseName,
        courseFee:courseFee, 
        cgst:cgst,
        sgst:sgst,
        igst:igst,
        taxAmount:taxAmount,
        totalAmount:totalAmount

    })
  })
  const data= await res.json();
  if(res.status==500||!data){
    window.alert("Something went weong")
  }
  else{
    window.alert("Fee added successfully");
    // history.push("/admin/allcourses")
  }
}

console.log(Fee)


    return (
       
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
          <label  className="form-label">Course</label>
          <select id="inputState" name="courseName" onChange={getValue} className="form-select">
            <option defaultValue>Select any one</option>
          {Courses.map((item)=>(
            <option key={item._id} value={item._id} >{item.courseName}</option>
            ))}

    
            
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Course Fee</label>
          <input type="text" name="courseFee" onChange={getValue} className="form-control" id="inputAddress"  />
        </div>
       
    
        <div className="col-md-4">
          <label  className="form-label">CGST</label>
          <input type="text" name="cgst" onChange={getValue} className="form-control"  />
        </div>
    
        <div className="col-md-4">
          <label  className="form-label">SGST</label>
          <input type="text" name="sgst" onChange={getValue} className="form-control"  />
        </div>
    
        <div className="col-md-4">
          <label  className="form-label">IGST</label>
          <input type="text" name="igst" onChange={getValue} className="form-control"  />
        </div>
    
        <div className="col-md-6">
          <label  className="form-label">Total Tax</label>
          <input type="text" name="taxAmount" onChange={getValue} className="form-control"  />
        </div>
    
        <div className="col-md-6">
          <label  className="form-label">Total amount</label>
          <input type="text" style={{color:"green"}} name="totalAmount" onChange={getValue} className="form-control"  />
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
     
    )
}

export default AddCourseFeeContent
