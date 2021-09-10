import React from 'react'
import SiteMobileMenu from './components/SiteMobileMenu'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Breadcrumb from './components/Breadcrumb'
import AcademicHistory from './components/AcademicHistory'
import AcademicWork from './components/AcademicWork'
import Principles from './components/Principles'
import OurTeachers from './components/OurTeachers'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'




const AboutWrap = () => {
    return (
        <>
              <SiteMobileMenu/>
            <TopHeader/>
           
            <Header/>
            <SectionHeader/>
            <Breadcrumb/>
            <AcademicHistory/>
            <AcademicWork/>
            <Principles/>
            <OurTeachers/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default AboutWrap
