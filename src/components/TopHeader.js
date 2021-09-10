import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const TopHeader = () => {
  const [loginstate, setloginstate] = useState(false)
  let login=JSON.parse(localStorage.getItem('token'))
 useEffect(() => {
  if(login&&login.login){
    setloginstate(true);
  }
})
  const logoutfunc=()=>{
    localStorage.removeItem('token')
    setloginstate(false)
 }

 if(loginstate){

 
    return (
        <>
           <div className="py-2 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 d-none d-lg-block green-link">
            <Link to="#" className="small mr-3 green-link " ><span className="icon-question-circle-o mr-2"></span> Have Link questions?</Link> 
            <Link to="#" className="small links green-link mr-3"><span className="icon-phone2 mr-2"></span> 10 20 123 456</Link> 
            <Link to="#" className="small links green-link mr-3"><span className="icon-envelope-o mr-2"></span> info@mydomain.com</Link> 
          </div>
          <div className="col-lg-3 text-right">
            
            <Link to="/" className="small btn links btn-success px-4 py-2 rounded-0" onClick={logoutfunc}>logout</Link>
          </div>
        </div>
      </div>
    </div>  
        </>
    )
}
else{
  return (
    <>
       <div className="py-2 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-9 d-none d-lg-block">
        <Link to="#" className="small mr-3 links"><span className="icon-question-circle-o mr-2"></span> Have Link questions?</Link> 
        <Link to="#" className="small links mr-3"><span className="icon-phone2 mr-2"></span> 10 20 123 456</Link> 
        <Link to="#" className="small links mr-3"><span className="icon-envelope-o mr-2"></span> info@mydomain.com</Link> 
      </div>
      <div className="col-lg-3 text-right">
        <Link to="/login" className="small links mr-3"><span className="icon-unlock-alt links"></span> Log In</Link>
        <Link to="/register" className="small btn links btn-success px-4 py-2 rounded-0"><span className="icon-users"></span>Register</Link>
      </div>
    </div>
  </div>
</div>  
    </>
)
}




}

export default TopHeader
