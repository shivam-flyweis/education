import React from 'react'
import SiteMobileMenu from './components/SiteMobileMenu'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Breadcrumb from './components/Breadcrumb'
import Principles from './components/Principles'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import NewsMainContent from './components/NewsMainContent'



const NewsWrap = () => {
    return (
        <>
              <SiteMobileMenu/>
            <TopHeader/>
            <Header/>
            <SectionHeader/>
            <Breadcrumb/>
            <NewsMainContent/>
            <Principles/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default NewsWrap

