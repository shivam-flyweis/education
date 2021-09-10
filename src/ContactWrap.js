import React from 'react'
import SiteMobileMenu from './components/SiteMobileMenu'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Breadcrumb from './components/Breadcrumb'
import Principles from './components/Principles'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import ContactMainContent from './components/ContactMainContent'



const AdmissionWrap = () => {
    return (
        <>
              <SiteMobileMenu/>
            <TopHeader/>
            <Header/>
            <SectionHeader/>
            <Breadcrumb/>
            <ContactMainContent/>
            <Principles/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default AdmissionWrap

