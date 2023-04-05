import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Product from "../components/Product";
import Brands from "../components/Brands";
import Featured from "../components/Featured";
import Sponserd from "../components/Sponserd";
import Breadcrumb from "../components/Breadcrumb";
import BlogCard from '../components/BlogCard'
import {blogsContent} from '../pages/Blogs'


const Home = () => {
  return (
    <>
      <section className="p-4 md:p-8 flex justify-center bg-bg-secondary">
        <div className="hidden">
        <Breadcrumb title='Home' className='hidden' />
        </div>
        <div className="grid gap-5 lg:grid-cols-2 max-w-[1450px]">
          <div className="overflow-hidden rounded-md z-10">
            <Carousel
              showArrows={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              transitionTime={500}
              animationHandler="fade"
              showStatus={false}
            >
              <div className="relative flex justify-start items-center">
                <img
                  src={require("../assets/images/main-banner-1.jpg")}
                  alt="banner"
                  className=""
                />
                <div className="absolute ml-4 sm:ml-8 text-xs sm:text-base flex flex-col items-start">
                  <h1 className="uppercase text-orange-600 text-xs sm:text-base">
                    suppercharged for pros.
                  </h1>
                  <h2 className="font-bold text-xs sm:text-5xl py-2 sm:py-6">
                    Special Sale
                  </h2>
                  <p>From $999.00 or 41$.62/mo</p>
                  <p>for 24 mo.Footnote</p>
                  <Link className="text-text-primary bg-black text-xs sm:text-lg rounded-full px-2 sm:px-4 py-1 sm:py-2 sm:mt-5 mt-2 font-semibold inline-block">
                    Buy Now
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-start items-center">
                <img
                  src={require("../assets/images/main-banner.jpg")}
                  alt="banner"
                  className=""
                />
                <div className="absolute ml-4 sm:ml-8 text-xs sm:text-base flex flex-col items-start">
                  <h1 className="uppercase text-orange-600 text-xs sm:text-base">
                    suppercharged for pros.
                  </h1>
                  <h2 className="font-bold text-xs sm:text-5xl py-2 sm:py-6">
                    Special Sale
                  </h2>
                  <p>From $999.00 or 41$.62/mo</p>
                  <p>for 24 mo.Footnote</p>
                  <Link className="text-text-primary bg-black text-xs sm:text-lg rounded-full px-2 sm:px-4 py-1 sm:py-2 sm:mt-5 mt-2 font-semibold inline-block">
                    Buy Now
                  </Link>
                </div>
              </div>
              
            </Carousel>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-5 ">
            <div className="overflow-hidden rounded-md flex items-center group">
              <img
                src={require("../assets/images/catbanner-01.jpg")}
                alt="banner"
                className="group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute pl-2 sm:pl-4 flex flex-col">
                <p className="text-orange-500 sm:text-sm text-xs ">BEST SALE</p>
                <h1 className="font-semibold  sm:py-3 text-xs sm:text-2xl ">
                  iPad S13+Pro.
                </h1>
                <p className="text-sm md:block hidden ">From $999.00</p>
                <p className="text-sm md:block hidden ">or $41.66/mo</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md flex items-center group">
              <img
                src={require("../assets/images/catbanner-02.jpg")}
                alt="banner"
                className="group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute pl-2 sm:pl-4 flex flex-col">
                <p className="text-orange-500 sm:text-sm text-xs ">NEW ARRIVAL</p>
                <h1 className="font-semibold  sm:py-3 text-xs sm:text-2xl">
                  iPad S13+Pro.
                </h1>
                <p className="text-sm md:block hidden ">From $999.00</p>
                <p className="text-sm md:block hidden ">or $41.66/mo</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md flex items-center group">
              <img
                src={require("../assets/images/catbanner-03.jpg")}
                alt="banner"
                className="group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute pl-2 sm:pl-4 flex flex-col">
                <p className="text-orange-500 sm:text-sm text-xs  ">15% OFF</p>
                <h1 className="font-semibold  sm:py-3 text-xs sm:text-2xl">
                  iPad S13+Pro.
                </h1>
                <p className="text-sm md:block hidden ">From $999.00</p>
                <p className="text-sm md:block hidden ">or $41.66/mo</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md flex items-center group">
              <img
                src={require("../assets/images/catbanner-04.jpg")}
                alt="banner"
                className="group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute pl-2 sm:pl-4 flex flex-col">
                <p className="text-orange-500 sm:text-sm text-xs  ">FREE ENGRAVING</p>
                <h1 className="font-semibold  sm:py-3 text-xs sm:text-2xl">
                  iPad S13+Pro.
                </h1>
                <p className="text-sm md:block hidden ">From $999.00</p>
                <p className="text-sm md:block hidden ">or $41.66/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Product/>
      <Brands/>
      <Featured/>
      <Sponserd/>
      <section className="grid place-items-center">
      <div className=" grid max-w-[1450px] gap-5 pt-16 px-4">
        <h1 className="text-black text-3xl font-normal">Our Latest Blogs</h1>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-7 gap-5">
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
      </div>
      </div>

      </section>

    </>
  );
};

export default Home;
