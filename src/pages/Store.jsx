import React,{useState} from "react";
import Breadcrumb from "../components/Breadcrumb";
import Productcard from "../components/Productcard";
import {GiCancel} from 'react-icons/gi'

const Store = () => {
  const featuredProduct = [
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicoloredv for student",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require("../assets/images/watch.jpg"),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicoloredv for student",
      rating: "4",
      price: "$100.00",
    },
  ];

  const [currentLayout,setCurrentLayOut]=useState(4)

  let sampleColors = [
    {
      brown: [165, 42, 42, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      azure: [240, 255, 255, 1],
      blueviolet: [138, 43, 226, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
    },
  ];

  const handelLayout=(val)=>{
      document.getElementById('product-div').style.gridTemplateColumns=`repeat(${val},1fr)`
      setCurrentLayOut(val)
  }

  const hideNav=()=>{
    document.getElementById('sub-nav').classList.toggle('hide')
  }

  return (
    <section className="grid place-items-center">
      <Breadcrumb title={"Our Store"} />
      <div className="max-w-[1450px] w-full flex mt-8 md:gap-3 px-4 text-sm sm:text-base">
        <div className="translate-x-[-100%] lg:translate-x-[0%] transition-all duration-300 ease-in-out lg:flex flex-col lg:h-[98vh] max-w-[330px] h-screen  lg:mt-2  overflow-y-scroll overflow-x-hidden gap-3 text-lg lg:w-80 lg:sticky lg:top-2 top-0 left-0 z-20 bg-bg-dull fixed " id="sub-nav">
          <div className="grid gap-5 bg-white p-4 rounded-md ">
            <div className="flex items-center justify-between">
            <h3 className="font-bold">Shop By Categories</h3>
            <GiCancel className="font-bold text-2xl lg:hidden cursor-pointer" onClick={hideNav}/>

            </div>
            <ul className="grid gap-1 text-[1rem]">
              <li className="text-text-secondary font-semibold cursor-pointer">
                Watch
              </li>
              <li className="text-text-secondary font-semibold cursor-pointer">
                {" "}
                Tv
              </li>
              <li className="text-text-secondary font-semibold cursor-pointer">
                {" "}
                Camera
              </li>
              <li className="text-text-secondary font-semibold cursor-pointer">
                {" "}
                Laptop
              </li>
            </ul>
          </div>
          <div className="grid bg-white p-4 rounded-md gap-4 ">
            <h3 className="font-bold mb-3">Filter</h3>
            <div className="grid gap-2 font-medium">
              <h3 className="font-semibold">Availiability</h3>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                in stock
              </label>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                out of stock
              </label>
            </div>
            <div className="grid gap-2">
              <h3 className="font-bold">Price</h3>
              <div className="flex justify-between  text-text-secondary gap-2 ">
                <label className="flex items-center justify-center gap-2 w-2/4">
                  $
                  <input
                    type="number"
                    className=" bg-bg-dull p-2 cursor-pointer w-full outline-none"
                    placeholder="from"
                  />
                </label>
                <label className="flex items-center justify-center gap-2 w-2/4">
                  $
                  <input
                    type="number"
                    className=" bg-bg-dull p-2 cursor-pointer w-full outline-none"
                    placeholder="to"
                  />
                </label>
              </div>
            </div>
            <div className="grid gap-3">
              <h3 className="font-bold">Color</h3>
              <div className="flex flex-wrap gap-2">
                {sampleColors.map((item) => {
                  let temp = [];
                  for (const key in item) {
                    temp.push(
                      <div
                        key={key}
                        className={`rounded-full w-10 h-10 cursor-pointer`}
                        style={{
                          backgroundColor: `rgba(${item[key].join(",")})`,
                        }}
                      ></div>
                    );
                  }
                  return temp;
                })}
              </div>
            </div>
            <div className="grid gap-2 font-medium">
              <h3 className="font-bold">Size</h3>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />S
              </label>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />M
              </label>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />L
              </label>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                Xl
              </label>
              <label className="flex items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 cursor-pointer" />
                XXl
              </label>
            </div>
          </div>
          <div className="bg-white rounded-md p-4">
            <h3 className="font-bold mb-6">Product Tag</h3>
            <ul className="flex flex-wrap gap-3">
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Headphone
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Laptop
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Mobile
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Speaker
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Tablet
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Charger
              </li>
              <li className="p-2 cursor-pointer font-medium text-text-secondary bg-bg-dull rounded-md ">
                Keyboard
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 font-medium">
          <div className="sticky top-0 bg-bg-dull z-10">
          <div className="py-2 px-4 flex flex-wrap gap-3 h-max justify-between bg-white w-full rounded-md my-2">
          <div className="bg-black lg:hidden static text-white px-2 py-2 text-xl rounded-md w-full text-center" onClick={hideNav}>Filter</div>
            <div className="flex sm:gap-5 gap-2 items-center justify-between flex-1 ">
              <p className="text-lg line sm:inline-block whitespace-nowrap">Sort By :</p>
              <select
                name="sort"
                id="sort"
                className="sm:px-8 px-2 min-w-[5rem] w-full outline-none bg-bg-dull rounded-md py-2 text-text-secondary cursor-pointer flex flex-1"
              >
                <option value="Best selling">Best selling</option>
                <option value="Price low to high">Price low to high</option>
                <option value="Price high to low">Price high to low</option>
                <option value="Top rated">Top rated</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
            <div className="flex items-center  sm:gap-5 gap-2 flex-1  sm:justify-end justify-between">
              <p className="text-text-secondary sm:min-w-max whitespace-nowrap">21 Product</p>
              <div className="flex gap-4">
              <div className={`h-8 w-8 ${currentLayout===4?'bg-slate-400':'bg-bg-dull'} rounded-lg md:flex items-center justify-center p-1.5 cursor-pointer hidden` } onClick={()=>handelLayout(4)}>
                <img
                  src="images/gr4.svg"
                  className="aspect-square"
                  alt="align"
                />
              </div>
              <div className={`h-8 w-8 ${currentLayout===3?'bg-slate-400':'bg-bg-dull'} rounded-lg sm:flex items-center justify-center p-1.5 cursor-pointer hidden` } onClick={()=>handelLayout(3)}>
                <img
                  src="images/gr3.svg"
                  className="aspect-square"
                  alt="align"
                />
              </div>
              <div className={`h-8 w-8 ${currentLayout===2?'bg-slate-400':'bg-bg-dull'} rounded-lg flex items-center justify-center p-1.5 cursor-pointer` } onClick={()=>handelLayout(2)}>
                <img
                  src="images/gr2.svg"
                  className="aspect-square"
                  alt="align"
                />
              </div>
              <div className={`h-8 w-8 ${currentLayout===1?'bg-slate-400':'bg-bg-dull'} rounded-lg flex items-center justify-center p-1.5 cursor-pointer` } onClick={()=>handelLayout(1)}>
                <img
                  src="images/gr.svg"
                  className="aspect-square"
                  alt="align"
                />
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className="sm:gap-4 gap-2 grid grid-cols-4 " id='product-div'>
            {featuredProduct.map((item, i) => {
              return (
                <Productcard
                  key={i}
                  img={item.img}
                  brand={item.brand}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
            {featuredProduct.map((item, i) => {
              return (
                <Productcard
                  key={i}
                  img={item.img}
                  brand={item.brand}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
