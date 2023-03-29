import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import BackToTop from './BackToTop'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet />
    <Footer/>
    <BackToTop/>
    </>
  )
}

export default Layout