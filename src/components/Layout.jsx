import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import {  useSelector } from "react-redux";
import { useEffect } from "react";


const Layout = () => {

  const {cart,compare,favourite}=useSelector(state=>state)
  const {pathname}=useLocation()

  
  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('compare',JSON.stringify(compare))
    localStorage.setItem('favourite',JSON.stringify(favourite))
  }, [cart,compare,favourite])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  

  

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
