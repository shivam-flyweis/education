import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'


const AddCourseCategoryContent = () => {
    const history=useHistory();
    const [element, setelement] = useState({
        courseCategoryName:"",
        courseType:""
  
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
    const {courseCategoryName,courseType}=element;
    const res= await fetch('http://localhost:5000/admin/course-category/create',{
      method:"POST",
      headers:
      {
        "content-type":"application/json"
      },
      body:JSON.stringify({
        courseCategoryName:courseCategoryName,
        courseType:courseType
  
      })
    })
    const data= await res.json();
    if(res.status==500||!data){
      window.alert("Something went weong")
    }
    else{
      window.alert("Category Added successfully");
      history.push("/admin/addcourse")
    }
  }
  let loginpermission=false;
  let login=JSON.parse(localStorage.getItem('admintoken'))
  if(login){
    loginpermission=login.login
    }
    if(loginpermission)
{    return (

        <div  className="d-flex flex-column content-wrapper">
            {/* Main Content */}
            <div class="content">
                {/* Topbar */}
                <AdminNavbar />
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


                              

                                <div className="col-lg-12">
                                    <label className="form-label">Add Course Category</label>
                                    <input type="text"  name="courseCategoryName" onChange={getValue} className="form-control" id="inputAddress" />
                                </div>

                                <div className="col-lg-12">
                                    <label className="form-label">Course Type</label>
                                    <input type="text" name="courseType" onChange={getValue} className="form-control" id="inputAddress" />
                                </div>

                                {/* <div className="col-12">
                                    <label className="form-label">Select Image</label>
                                    <input type="file" className="form-control" id="inputAddress" />
                                </div> */}
{/* 
                                <div className="col-12">
                                    <label className="form-label">Select Image</label>
                                    <input type="file" className="form-control" id="inputAddress" />
                                </div> */}
                                

                                <div className="col-12">
                                    <button type="submit"  onClick={Submitbtn} className="btn btn-success">Submit</button>
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

export default AddCourseCategoryContent
