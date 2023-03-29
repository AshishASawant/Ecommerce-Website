import React from "react";
import { BiSearch } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const hideNavbar=()=>{
    document.getElementById("navbar").classList.toggle('hide')
  }

  return (<>
    <div className="h-[4rem] md:h-full overflow-hidden absolute md:static z-20 transition-all  ease-linear" id="navbar">
      <div className="bg-bg-primary text-text-primary pt-4 items-center flex flex-wrap md:px-6 px-2 text-sm gap-5 flex-col sm:flex-row py-2 overflow-hidden"  >
        <div className="flex gap-5 flex-1 sm:flex-initial w-full sm:w-min">
        <RxHamburgerMenu className="text-3xl md:hidden" onClick={hideNavbar}/>
        <Link className="text-3xl">AlphaMart</Link>
        </div>
        <div className="flex bg-secondary rounded-md items-center justify-center text-black  flex-1 overflow-hidden sm:min-w-[20rem] sm:max-w-[30rem] w-full" >
          <input
            type="text"
            name="search"
            placeholder="sports shoes"
            autoComplete={"off"}
            onChange={(e) => (e.target.name = e.target.value)}
            className="outline-none border-none px-6 py-2 w-full"
          />
          <BiSearch className="text-bg-primary bg-yellow-400  aspect-square text-4xl py-1 px-2" />
        </div>
        <div className="gap-5 flex m-2 flex-wrap sm:flex-nowrap justify-evenly flex-1">
          <div className="flex w-32 justify-between text-text-primary">
            <GrPowerCycle className="h-full text-4xl invert text-text-primary" />
            <Link to='/compare' className="pl-2">Compare Product</Link>
          </div>
          <div className="flex w-32 justify-between text-text-primary">
            <BsHeart className="h-full text-4xl " />
            <Link to='/wishlist' className="pl-2">Favourite Whishlist</Link>
          </div>
          <div className="flex w-32 justify-between text-text-primary">
            <AiOutlineUser className="h-full text-4xl " />
            <Link to='/login' className="pl-2">Login My Account</Link>
          </div>
          <Link to='/cart' className="flex w-32 justify-between text-text-primary">
            <AiOutlineShoppingCart className="h-full text-4xl text-yellow-300" />
            <div className="flex flex-col flex-1 pl-2">
              <span className="text-sm bg-secondary  bg-bg-hover text-text-primary w-min  px-3 rounded-lg">
                0
              </span>
              <span className="text-sm text-primary">$0.00</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-slate-700  text-text-primary py-2 flex-wrap items-center flex flex-col sm:flex-row px-4 gap-5 w-full">
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
    </div>
    <div className="h-[4rem] md:h-0"></div>
    </>
  );
};

export default Navbar;
