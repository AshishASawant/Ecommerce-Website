import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Productcard from "../components/Productcard";
import { GiCancel } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { AiFillFilter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeCategorie, fetchData } from "../features/product/productSlice";
import { ImCross } from "react-icons/im";

const Store = () => {
  //declarations
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [allProduct, setAllProduct] = useState([]);
  const [sort, setSort] = useState("");

  //useStates
  const [currentLayout, setCurrentLayOut] = useState(Number(localStorage.getItem('storeView')) || 2);
  const [searchbar, setSearchbar] = useState("");


  // useEffects
  useEffect(() => {
    window.addEventListener("resize", handelLayout);
    return () => {
      window.removeEventListener("resize", handelLayout);
    };
  }, []);

  useEffect(() => {
   setAllProduct(handleSort(allProduct))
   // eslint-disable-next-line
  }, [sort]);

  useEffect(() => {
    setAllProduct(handleSort(product.data));
    // eslint-disable-next-line
  }, [product.data]);

  useEffect(() => {
    localStorage.setItem('storeView',currentLayout)
  }, [currentLayout])
  


  // functions
  const handleSort = (data) => {
    let sorted = [...data];

    if (sort === "pHigh") {
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
          if (sorted[j].price > sorted[j + 1].price) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
          }
        }
      }
    }
    if (sort === "bestSelling") {
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
          if (sorted[j].id > sorted[j + 1].id) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
          }
        }
      }
    } else if (sort === "topRated") {
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
          if (sorted[j].rating.rate < sorted[j + 1].rating.rate) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
          }
        }
      }
    } else if (sort === "pLow") {
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
          if (sorted[j].price < sorted[j + 1].price) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
          }
        }
      }
    } else if (sort === "newest") {
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
          if (sorted[j].id < sorted[j + 1].id) {
            let temp = sorted[j];
            sorted[j] = sorted[j + 1];
            sorted[j + 1] = temp;
          }
        }
      }
    }
    return sorted
  };

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

  const handelLayout = () => {
    window.innerWidth <= 640
      ? setCurrentLayOut(2)
      : window.innerWidth <= 760
      ? setCurrentLayOut(3)
      : setCurrentLayOut(4);
  };

  const hidefilter = () => {
    document.getElementById("filter-bar").classList.toggle("no-transform");
  };

  const handleSearch = (e) => {
    setSearchbar(e.target.value);
    setAllProduct(
      product.data.filter((item) => {
        return item.title.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <section className="grid place-items-center">
      {}
      <Breadcrumb title={"Our Store"} />
      <div className="max-w-[1450px] w-full flex mt-8 md:gap-3 px-4 text-sm sm:text-base">
        <div
          className="translate-x-[-100%] lg:translate-x-[0%] transition-all duration-300 ease-in-out lg:flex flex-col lg:h-[98vh] max-w-[330px] h-screen  lg:mt-2  overflow-y-scroll overflow-x-hidden gap-3 text-lg lg:w-80 lg:sticky lg:top-2 top-0 left-0 z-20 bg-bg-dull fixed "
          id="filter-bar"
        >
          <div className="grid gap-5 bg-bg-secondary p-4 rounded-md ">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Shop By Categories</h3>
              <GiCancel
                className="font-bold text-2xl lg:hidden cursor-pointer"
                onClick={hidefilter}
              />
            </div>
            <ul className="grid gap-1 text-[1rem] capitalize">
              <li
                className="text-text-secondary font-semibold cursor-pointer"
                onClick={() => {dispatch(fetchData())}}
              >
                all products
              </li>
              <li
                className="text-text-secondary font-semibold cursor-pointer"
                onClick={(e) => dispatch(changeCategorie(e.target.innerHTML))}
              >
                electronics
              </li>
              <li
                className="text-text-secondary font-semibold cursor-pointer"
                onClick={(e) => dispatch(changeCategorie(e.target.innerHTML))}
              >
                jewelery
              </li>
              <li
                className="text-text-secondary font-semibold cursor-pointer"
                onClick={(e) => dispatch(changeCategorie(e.target.innerHTML))}
              >
                men's clothing
              </li>
              <li
                className="text-text-secondary font-semibold cursor-pointer"
                onClick={(e) => dispatch(changeCategorie(e.target.innerHTML))}
              >
                women's clothing
              </li>
            </ul>
          </div>
          <div className="grid bg-bg-secondary p-4 rounded-md gap-4 ">
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
          <div className="bg-bg-secondary rounded-md p-4">
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
        <div className="flex flex-1 flex-col gap-1.5 font-medium text-sm">
          <div className="sticky md:top-0 top-14 bg-bg-dull z-10">
            <div className="py-2 px-4 flex flex-wrap gap-3 h-max justify-between bg-bg-secondary w-full rounded-md my-2">
              <div className="flex gap-1 w-full overflow-hidden lg:hidden">
                <div className="static  py-2 sm:text-xl rounded-md w-full flex text-center gap-2 text-sm">
                  <button
                    onClick={hidefilter}
                    className="flex items-center justify-center gap-2 p-2  text-text-primary  bg-bg-primary rounded-md sm:flex-1 "
                  >
                    <AiFillFilter />
                    <span className="hidden sm:inline-block">Filter</span>
                  </button>
                  <div className="flex bg-bg-dull px-2 rounded-md items-center flex-1 sm:hidden">
                    <input
                      type="text"
                      className=" bg-bg-dull  outline-none  w-full min-w-[1rem]"
                      autoFocus={true}
                      onChange={handleSearch}
                      placeholder="search"
                      value={searchbar}
                      id="secondarysearchbar"
                      autoComplete="off"
                    />
                    <button
                      type="reset"
                      style={
                        searchbar === ""
                          ? { display: "none" }
                          : { display: "flex" }
                      }
                      className="text-xs rounded-full w-4 h-4  items-center justify-center  "
                      onClick={() => {
                        setSearchbar("");
                        setAllProduct(product.data);
                      }}
                    >
                      <ImCross className="text-[.5rem]"/>
                    </button>
                  </div>
                  <button className="text-lg bg-bg-hover rounded-md p-2  sm:hidden">
                    <BiSearch />
                  </button>
                </div>
              </div>
              <div className="flex sm:gap-5 gap-2 items-center justify-between flex-1 ">
                <p className="sm:text-lg text-sm line sm:inline-block whitespace-nowrap">
                  Sort By :
                </p>
                <select
                  name="sort"
                  id="sort"
                  onChange={(e) => setSort(e.target.value)}
                  className="sm:px-8 px-2 min-w-[5rem] w-full outline-none bg-bg-dull rounded-md py-2 text-text-secondary cursor-pointer flex flex-1"
                >
                  <option value="bestSelling">Best selling</option>
                  <option value="pHigh">Price low to high</option>
                  <option value="pLow">Price high to low</option>
                  <option value="topRated">Top rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              <div className="flex items-center  sm:gap-5 gap-2 flex-1  sm:justify-end justify-between">
                <p className="text-text-secondary sm:min-w-max whitespace-nowrap">
                  {allProduct.length} Products
                </p>
                <div className="flex gap-4">
                  <div
                    className={`h-8 w-8 ${
                      currentLayout === 4 ? "bg-slate-400" : "bg-bg-dull"
                    } rounded-lg md:flex items-center justify-center p-1.5 cursor-pointer hidden`}
                    onClick={() => {setCurrentLayOut(4)
                  }
                  }
                  >
                    <img
                      src="images/gr4.svg"
                      className="aspect-square"
                      alt="align"
                    />
                  </div>
                  <div
                    className={`h-8 w-8 ${
                      currentLayout === 3 ? "bg-slate-400" : "bg-bg-dull"
                    } rounded-lg sm:flex items-center justify-center p-1.5 cursor-pointer hidden`}
                    onClick={() => {setCurrentLayOut(3)
                  }}
                  >
                    <img
                      src="images/gr3.svg"
                      className="aspect-square"
                      alt="align"
                    />
                  </div>
                  <div
                    className={`h-8 w-8 ${
                      currentLayout === 2 ? "bg-slate-400" : "bg-bg-dull"
                    } rounded-lg flex items-center justify-center p-1.5 cursor-pointer`}
                    onClick={() => {setCurrentLayOut(2)
                  }}
                  >
                    <img
                      src="images/gr2.svg"
                      className="aspect-square"
                      alt="align"
                    />
                  </div>
                  <div
                    className={`h-8 w-8 ${
                      currentLayout === 1 ? "bg-slate-400" : "bg-bg-dull"
                    } rounded-lg flex items-center justify-center p-1.5 cursor-pointer`}
                    onClick={() => {setCurrentLayOut(1)
                  }}
                  >
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
          {product.status === "loading" ? (
            <div className="w-full text-center h-5 sticky top-10">
              Loading.....
            </div>
          ) : (
            <>
           { allProduct.length===0 && <p className="text-center">No Data Available</p>}
            <div
              className={`sm:gap-4 gap-2 grid`}
              style={{ gridTemplateColumns: `repeat(${currentLayout},1fr)` }}
              id="product-div"
            >
              {allProduct.map((item) => {
                return <Productcard props={item} key={item.id} />;
              })}
            </div></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Store;
