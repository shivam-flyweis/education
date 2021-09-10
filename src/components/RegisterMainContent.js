import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
const RegisterMainContent = () => {
  const history=useHistory();
  const [element, setelement] = useState({ 
    firstname:"",
    lastname:"", 
    username:"",
    email:"",
    contact:"",
    password:"",
    password2:"",

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
  const {firstname,lastname,email,password,password2,contact}=element;
  const res= await fetch('http://localhost:5000/student/student/create',{
    method:"POST",
    headers:
    {
      "content-type":"application/json"
    },
    body:JSON.stringify({
      firstName:firstname,
      lastName:lastname,
      username:lastname,
      email:email,
      password:password,
      password2:password2,
      contact:contact

    })
  })
  const data= await res.json();
  if(res.status==500||!data){
    window.alert("Something went weong")
  }
  else{
    window.alert("Registration successful");
    history.push("/login")
  }
}
    return (
        <>
            
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="username">Firstname</label>
                  <input type="text" id="firstname" name="firstname" onChange={getValue} className="form-control form-control-lg" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" name="lastname" onChange={getValue} id="username" className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="usertname">Username</label>
                  <input type="text" name="username" onChange={getValue} id="username" className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={getValue} id="email" className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="contact">Contact</label> 
                  <input type="text" name="contact" onChange={getValue} id="contact" className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="pword">Password</label>
                  <input type="password" name="password" onChange={getValue} id="pword" className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="pword2">Re-type Password</label>
                  <input type="password" name="password2" onChange={getValue} id="pword2" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="submit" onClick={Submitbtn}  defaultValue="Register" className="btn btn-success btn-lg px-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default RegisterMainContent
