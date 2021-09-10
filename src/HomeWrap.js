import React from 'react'
import Navbar from './components/Navbar'
import SiteMobileMenu from './components/SiteMobileMenu'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Slider from './components/Slider'
import SiteSection from './components/SiteSection'
import Popular from './components/Popular'
import AboutHome from './components/AboutHome'
import Testimonials from './components/Testimonials'
import Principles from './components/Principles'
import NewsUpdates from './components/NewsUpdates'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const Sitewrap = ({setProductId}) => {
    return (
        <>
            <SiteMobileMenu/>
            <TopHeader/>
            
            <Header/>
           
            <Slider/>
            <SiteSection/>
            <Popular  />
            <AboutHome/>
            <Testimonials/>
            <Principles/>
            <NewsUpdates/>
            <Subscribe/>
            <Footer/>


            
        </>
    )
}

export default Sitewrap
