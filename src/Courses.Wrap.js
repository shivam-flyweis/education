import React from 'react'
import SiteMobileMenu from './components/SiteMobileMenu'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Breadcrumb from './components/Breadcrumb'
import CoursesMainContent from './components/CoursesMainContent'
import Principles from './components/Principles'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'




const AdmissionWrap = () => {
    return (
        <>
              <SiteMobileMenu/>
            <TopHeader/>
            <Header/>
            <SectionHeader/>
            <Breadcrumb/>
            <CoursesMainContent/>
            <Principles/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default AdmissionWrap
