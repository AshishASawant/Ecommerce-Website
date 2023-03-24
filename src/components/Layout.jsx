import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout