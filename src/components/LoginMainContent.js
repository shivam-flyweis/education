import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import jwt from 'jsonwebtoken';
import store from '../redux/store';
import {setCurrentUser, signOut} from '../redux';
import setAuthorizationToken from '../redux/actions/setAuthorization';

const LoginMainContent = () => {
  localStorage.setItem('token',JSON.stringify({login:false}));
  const history=useHistory();
  const [loginstate, setloginstate] = useState(false) 
    const [element, setelement] = useState({
       
        email:"",
        password:""
       
  
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
      const {email,password,}=element;
      const res= await fetch('http://localhost:5000/student/authentication/login',{
        method:"POST",
        headers:
        {
          "content-type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password,
         
    
        })
      })
    
      const data= await res.json();
      localStorage.setItem('token',JSON.stringify({login:false}));
      if(res.status==500||!data){

        window.alert("Something went weong")
      }
      else{
        window.alert("login successful")
        console.log(data);
        localStorage.setItem('token',JSON.stringify({token:data.token,login:true}));
        history.push("/")
      }
      
    }
    return (
        <>
            
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="username">Email</label>
                  <input type="email" id="email" 
                  name="email"
                  onChange={getValue} 
                  className="form-control form-control-lg" />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="pword">Password</label>
                  <input type="text" 
                  onChange={getValue} 
                  name="password"
                  id="pword" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="submit" 
                  onClick={Submitbtn} defaultValue="Log In" className="btn btn-success btn-lg px-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default LoginMainContent
