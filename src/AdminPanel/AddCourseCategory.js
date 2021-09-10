import React from 'react'
import ModalFade from './components/ModalFade'
import ScrollToTop from './components/ScrollToTop'
import AddCourseCategoryContent from './components/AddCourseCategoryContent'
import Sidebar from './components/Sidebar'
import { useHistory } from 'react-router-dom'
const AddCourseCategory = () => {


  let history=useHistory()
  let login=JSON.parse(localStorage.getItem('admintoken'))
  if(login.login){

  
   
    return (
      <>
      <div id="page-top">

      <div id="wrapper" >

        <Sidebar/>  
        <AddCourseCategoryContent/>  
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

export default AddCourseCategory
