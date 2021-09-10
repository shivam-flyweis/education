import React from 'react'
import ModalFade from './components/ModalFade'
import ScrollToTop from './components/ScrollToTop'
import AddCourseFeeContent from './components/AddCourseFeeContent'
import Sidebar from './components/Sidebar'
import { useHistory } from 'react-router-dom'
const AddCourseFee = () => {

  let history=useHistory()
  let login=JSON.parse(localStorage.getItem('admintoken'))
  if(login.login){

  
    return (
      <>
      <div id="page-top">

      <div id="wrapper" > 

        <Sidebar/>  
        <AddCourseFeeContent/>  
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





export default AddCourseFee
