import React, { createContext,useState,useEffect} from 'react';
import './App.css';
import Admin from './AdminPanel/Admin'
import AdminLogin from './AdminPanel/AdminLogin';
import AddCourseCategory from './AdminPanel/AddCourseCategory'
import AllCourse from './AdminPanel/AllCourse'
import AddCourseFee from './AdminPanel/AddCourceFee';
import EditCourse from './AdminPanel/EditCourse'
import HomeWrap from './HomeWrap';
import Error from './error';
import { BrowserRouter } from "react-router-dom";
import AboutWrap from './AboutWrap';
import AdmissionWrap from './AdmissionWrap';
import CoursesWrap from './Courses.Wrap'
import CourseSingleWrap from './CourseSingleWrap'
import LoginWrap from './LoginWrap'
import RegisterWrap from './RegisterWrap'
import ContactWrap from './ContactWrap';
import AddCourse from './AdminPanel/AddCourse';
import NewsWrap from './NewsWrap';
import Try from './components/Try';


import Loader from './components/Loader'
import { Route, Switch } from 'react-router-dom'
const ProductidContext = createContext();
function App() { 
 
  const [productId,setProductId] = useState();

  console.log(productId)
  
  return (
    <div className="site-wrap" >
      <BrowserRouter>
 <Switch>

<Route exact path="/">
  
    <HomeWrap setProductId={setProductId}/>
  
  <Loader/>
</Route>
 

<Route exact path="/about">
<AboutWrap/>
<Loader/>
</Route>

<Route exact path="/admission">
<AdmissionWrap/>
<Loader/>
</Route>

<Route exact path="/contact">
<ContactWrap/>
<Loader/>
</Route>

<Route exact path="/courses">
  <ProductidContext.Provider value={setProductId}>
<CoursesWrap/>
  </ProductidContext.Provider>
<Loader/>
</Route>

<Route exact path="/course/:id">
<CourseSingleWrap/>
<Loader/>
</Route>

<Route exact path="/course">
<CourseSingleWrap/>
<Loader/>
</Route>

<Route exact path="/register">
<RegisterWrap/>
<Loader/>
</Route>

<Route exact path="/login">
<LoginWrap/>
<Loader/>
</Route>

<Route exact path="/news">
<NewsWrap/>
<Loader/>
</Route>

<Route exact path="/admin">
<Admin/>

</Route>
<Route exact path="/adminlogin">
<AdminLogin/>

</Route>

<Route exact path="/admin/allcourses">
<AllCourse/>
</Route>

<Route exact path="/admin/addcourse">
<AddCourse/>
</Route>

<Route exact path="/admin/addcoursefee">
<AddCourseFee/>
</Route>

<Route exact path="/admin/editcourse">
<EditCourse/>
</Route>

<Route exact path="/admin/coursecategory">
<AddCourseCategory/>
</Route>
<Route exact path="/try">
<Try/>
</Route>



<Route>
<Error/>
</Route>

</Switch>
</BrowserRouter>



    </div>
  );
}

export default App;
export {ProductidContext}
