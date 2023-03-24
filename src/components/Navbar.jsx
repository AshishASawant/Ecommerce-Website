import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-bg-primary text-text-primary py-4 justify-evenly flex flex-wrap text-sm items-center gap-5 ">
        <Link className="text-3xl">AlphaMart</Link>
        <div className="flex bg-white rounded-md h-9 overflow-hidden text-black mx-2">
          <input
            type="text"
            name="search"
            placeholder="sports shoes"
            autoComplete={"off"}
            onChange={(e) => (e.target.name = e.target.value)}
            className="outline-none border-none p-1 w-96"
          />
          <BiSearch className="text-bg-primary bg-yellow-400 h-full py-1 w-10 px-2" />
        </div>
        <div className="gap-5 flex flex-wrap m-2 justify-evenly ">
          <div className="flex w-32 justify-between text-text-secondary">
            <GrPowerCycle className="h-full text-4xl invert-[0.8]" />
            <Link to='/compare' className="pl-2">Compare Product</Link>
          </div>
          <div className="flex w-32 justify-between text-text-secondary">
            <BsHeart className="h-full text-4xl " />
            <Link to='/wishlist' className="pl-2">Favourite Whishlist</Link>
          </div>
          <div className="flex w-32 justify-between text-text-secondary">
            <AiOutlineUser className="h-full text-4xl " />
            <Link to='/login' className="pl-2">Login My Account</Link>
          </div>
          <Link to='/cart' className="flex w-32 justify-between text-text-secondary">
            <AiOutlineShoppingCart className="h-full text-4xl text-yellow-300" />
            <div className="flex flex-col flex-1 pl-2">
              <span className="text-sm bg-white text-black w-min  px-3 rounded-lg">
                0
              </span>
              <span className="text-sm text-white">$0.00</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-slate-700  text-text-primary py-2 flex-wrap items-center flex flex-col sm:flex-row px-4 gap-5">
        <div className=" px-4 flex items-center  my-1 relative whitespace-nowrap gap-4">
          {/* <div> */}
            <CgMenuGridO className="text-2xl" />
            <span>SHOP CATEGORIES</span>
            <span className="rotate-90 ml-10">&#62;</span>
          {/* </div> */}
        </div>
        <div className="flex flex-wrap sm:flex-nowrap  gap-2 justify-between md:justify-evenly whitespace-nowrap">
          <NavLink to="/" className="px-6">
            HOME
          </NavLink>
          <NavLink to="/store" className="px-6 whitespace-nowrap">
            OUR STORE
          </NavLink>
          <NavLink to="/blogs" className="px-6">
            BLOGS
          </NavLink>
          <NavLink to="/contact" className="px-6">
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
