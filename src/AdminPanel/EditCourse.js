import React from 'react'
import ModalFade from './components/ModalFade'
import ScrollToTop from './components/ScrollToTop'
import EditCourseContent from './components/EditCourseContent'
import Sidebar from './components/Sidebar'
import { useHistory } from 'react-router-dom'
const EditCourse = () => {


  let history=useHistory()
  let login=JSON.parse(localStorage.getItem('admintoken'))
  if(login.login){

  



    return (
      <>
      <div id="page-top">

      <div id="wrapper" >

        <Sidebar/>  
        <EditCourseContent/>  
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



    return (
        <>
        <div id="page-top">

        <div id="wrapper" >

          <Sidebar/>  
          <EditCourseContent/>  
        </div>
          <ScrollToTop/>  
          <ModalFade/>  
        </div>
        </>
    )
}

export default EditCourse
