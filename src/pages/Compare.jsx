import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeCompare } from "../features/compareSlice";

const Compare = () => {
  const compare = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  // const compareData = [
  //   {
  //     img: "//cdn.shopify.com/s/files/1/0620/5082/8457/products/19.jpg?v=1655097254&width=269",
  //     title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera",
  //     price: "$10",
  //     brand: "Sony",
  //     type: "Camera",
  //     sku: "SKU049",
  //     availability: "In Stock",
  //     color: ["red", "blue", "yellow"],
  //     size: "L M S",
  //     link: "",
  //   },
  // ];

  const CompareCard = ({ id }) => {
    const [compareData, setCompareData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      getData();
      // eslint-disable-next-line
    }, []);

    const getData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      setCompareData(res);
    };

    return (
      compareData && (
        <div className=" group flex flex-col w-full justify-self-start h-full">
          <div className="relative p-4 bg-bg-secondary">
            <img
              src={compareData?.image}
              alt="product"
              className="w-full aspect-square"
            />
            <GiCancel
              className="absolute text-3xl top-5 left-5  group-hover:block lg:hidden block cursor-pointer"
              onClick={() => dispatch(removeCompare(compareData.id))}
            />
          </div>
          <div className="grid gap-4 font-medium mt-3 p-2">
            <h2
              className="group-hover:underline underline-offset-4 decoration-2 cursor-pointer sm:line-clamp-1 line-clamp-2"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`../store/${compareData.title}`, {
                  state: compareData,
                });
              }}
            >
              {compareData?.title}
            </h2>
            <p>{compareData?.price}</p>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 px-2">
            <p className="capitalize font-semibold  py-4 ">{"brand :"}</p>
            <p className="capitalize text-text-secondary">Unknown</p>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 px-2">
            <p className="capitalize font-semibold  py-4 ">{"type :"}</p>
            <p className="capitalize text-text-secondary">Something</p>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 px-2">
            <p className="capitalize font-semibold  py-4 ">{"sku :"}</p>
            <p className="capitalize text-text-secondary">SKU049</p>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 px-2">
            <p className="capitalize font-semibold  py-4 ">
              {"availability :"}
            </p>
            <p className="capitalize text-text-secondary">In Stock</p>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 px-2">
            <p className="capitalize font-semibold  py-4 ">{"color :"}</p>
            <div className="flex gap-1">
              <div
                className="rounded-full h-6 aspect-square"
                style={{ backgroundColor: "red" }}
              />
              <div
                className="rounded-full h-6 aspect-square"
                style={{ backgroundColor: "red" }}
              />
              <div
                className="rounded-full h-6 aspect-square"
                style={{ backgroundColor: "red" }}
              />
            </div>
          </div>
          <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap p-2">
            <p className="capitalize font-semibold  py-4 ">{"size :"}</p>
            <p className="capitalize text-text-secondary">L M S</p>
          </div>
        </div>
      )
    );
  };

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Compare" />
      {compare.length !== 0 ? (
        <div className="max-w-[1450px] pt-16 px-4 w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full flex-wrap gap-5 items-center justify-between">
            {compare.map((id) => (
              <CompareCard id={id} key={id} />
            ))}
          </div>
        </div>
      ) : (
        <p className="w-full mt-16 text-center">Add Some Products To Compare</p>
      )}
    </section>
  );
};

export default Compare;
