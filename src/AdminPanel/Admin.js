import React from 'react'
import ModalFade from './components/ModalFade'
import ScrollToTop from './components/ScrollToTop'
import ContentWrapper from './components/ContentWrapper'
import Sidebar from './components/Sidebar'
import { useHistory } from 'react-router-dom'
const Admin = () => {
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
          <ContentWrapper/>  
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

export default Admin
