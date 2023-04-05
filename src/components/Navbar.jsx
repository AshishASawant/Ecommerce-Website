import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineDown,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchProductCard from "./SearchProductCard";
import { changeCategorie, fetchData } from "../features/product/productSlice";

const Navbar = () => {
  const { product, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [searchProduct, setsearchProduct] = useState([]);

  const handleMainSearch = (e) => {
    if (e.target.value === "") setsearchProduct([]);
    else {
      setsearchProduct(
        product.data.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        })
      );
    }
  };

  const hideNavbar = () => {
    document.getElementById("navbar").classList.toggle("hide");
  };

  return (
    <>
      <div
        className="h-[4rem] md:h-full  absolute md:static z-20 transition-all  ease-linear overflow-hidden md:overflow-visible"
        id="navbar"
      >
        <div className="bg-bg-primary text-text-primary pt-4 items-center flex flex-wrap md:px-6 px-2 text-sm gap-5 flex-col sm:flex-row py-2 ">
          <div className="flex gap-5 flex-1 sm:flex-initial w-full sm:w-min">
            <RxHamburgerMenu
              className="text-3xl md:hidden cursor-pointer"
              onClick={hideNavbar}
            />
            <Link to='/' className="text-3xl">AlphaMart</Link>
          </div>
          <div className="relative flex-col flex bg-secondary rounded-md items-center justify-center text-black  flex-1  sm:min-w-[20rem] sm:max-w-[30rem] w-full">
            <div className="flex w-full">
              <form className="relative flex items-center flex-1">
                <input
                  type="text"
                  name="search"
                  placeholder="Shirt"
                  autoComplete={"off"}
                  onChange={handleMainSearch}
                  className="outline-none border-none px-6 py-2 w-full rounded-l-md"
                  id="search-input"
                />{" "}
                <button
                  type="reset"
                  style={
                    document.getElementById("search-input")?.value === ""
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                  className="text-xs rounded-full w-4 h-4 right-2 items-center justify-center absolute "
                  onClick={() => {
                    let ele = document.getElementById("search-input");
                    ele.value = "";
                    setsearchProduct("");
                  }}
                >
                  <ImCross />
                </button>
              </form>
              <BiSearch className="text-bg-primary bg-yellow-400  aspect-square text-4xl py-1 px-2 rounded-r-md" />
            </div>
            {searchProduct.length !== 0 && (
              <div className="z-30 w-full max-h-[50vh] border-slate-100 border-2 overflow-scroll absolute translate-y-[103%] bottom-0  rounded-md bg-bg-secondary grid sm:grid-cols-2 gap-5 p-4 overflow-x-hidden">
                {searchProduct.map((item) => (
                  <SearchProductCard
                    props={item}
                    setsearchProduct={setsearchProduct}
                    key={item.id}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="gap-5 flex m-2 flex-wrap sm:flex-nowrap justify-evenly flex-1">
            <div className="flex w-32 justify-between text-text-primary">
              <GrPowerCycle className="h-full text-4xl invert text-text-primary" />
              <Link to="/compare" className="pl-2" onClick={hideNavbar}>
                Compare Product
              </Link>
            </div>
            <div className="flex w-32 justify-between text-text-primary">
              <BsHeart className="h-full text-4xl " />
              <Link to="/wishlist" className="pl-2" onClick={hideNavbar}>
                Favourite Whishlist
              </Link>
            </div>
            <div className="flex w-32 justify-between text-text-primary">
              <AiOutlineUser className="h-full text-4xl " />
              <Link to="/login" className="pl-2" onClick={hideNavbar}>
                Login My Account
              </Link>
            </div>
            <Link
              to="/cart"
              className="flex w-32 justify-between text-text-primary"
            >
              <AiOutlineShoppingCart className="h-full text-4xl text-yellow-300" />
              <div className="flex flex-col flex-1 pl-2">
                <span className="text-sm bg-secondary  bg-bg-hover text-text-primary w-min  px-3 rounded-lg">
                  {cart.item.length}
                </span>
                <span className="text-sm text-primary">${cart.cartTotal}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-slate-800  text-text-primary py-2 flex-wrap  items-center flex flex-col-reverse md:flex-row px-4 gap-5 w-full">
          <div className=" px-4 flex flex-col items-center  my-1 relative whitespace-nowrap gap-4 group md:border-r-2 pr-10">
            <div className="flex gap-3 relative items-center cursor-pointer ">
              <CgMenuGridO className="text-2xl" />
              <span>SHOP CATEGORIES</span>
              <AiOutlineDown className="ml-5" />
            </div>
            <div className=" h-6 duration-500 absolute  group-hover:h-[18.5rem] w-full pt-4 z-30 rounded-b-md top-0 left-0 cursor-pointer overflow-hidden transition-all ease-in-out">
              <div className="grid gap-5   bg-bg-primary mt-5">
                <ul className="grid  text-[.8rem] capitalize text-text-primary">
                  <Link
                    to="/store"
                    className=" font-medium cursor-pointer border-b border-slate-300 p-4"
                    onClick={() => {
                      dispatch(fetchData());
                      hideNavbar()
                    }}
                  >
                    all products
                  </Link>
                  <Link
                    to="/store"
                    className="font-medium cursor-pointer border-b border-slate-300 p-4"
                    onClick={(e) => {
                      dispatch(changeCategorie(e.target.innerHTML));
                      hideNavbar()
                    }}
                  >
                    electronics
                  </Link>
                  <Link
                    to="/store"
                    className=" font-medium cursor-pointer border-b border-slate-300 p-4"
                    onClick={(e) => {
                      dispatch(changeCategorie(e.target.innerHTML));
                      hideNavbar()
                    }}
                  >
                    jewelery
                  </Link>
                  <Link
                    to="/store"
                    className=" font-medium cursor-pointer border-b border-slate-300 p-4"
                    onClick={(e) => {
                      dispatch(changeCategorie(e.target.innerHTML));
                      hideNavbar()
                    }}
                  >
                    men's clothing
                  </Link>
                  <Link
                    to="/store"
                    className=" font-medium cursor-pointer border-b border-slate-300 p-4"
                    onClick={(e) => {
                      dispatch(changeCategorie(e.target.innerHTML));
                      hideNavbar()
                    }}
                  >
                    women's clothing
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap  gap-2 justify-between md:justify-evenly whitespace-nowrap">
            <NavLink to="/" className="px-6" onClick={hideNavbar}>
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className="px-6 whitespace-nowrap"
              onClick={hideNavbar}
            >
              OUR STORE
            </NavLink>
            <NavLink to="/blogs" className="px-6" onClick={hideNavbar}>
              BLOGS
            </NavLink>
            <NavLink to="/contact" className="px-6" onClick={hideNavbar}>
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
