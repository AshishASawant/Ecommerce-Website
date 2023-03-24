import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {GiCancel} from 'react-icons/gi'

const Compare = () => {
  const compareData = [
    {
      img: "//cdn.shopify.com/s/files/1/0620/5082/8457/products/19.jpg?v=1655097254&width=269",
      title: "Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera",
      price: "$10",
      brand: "Sony",
      type: "Camera",
      sku: "SKU049",
      availability: "In Stock",
      color: ["red", "blue", "yellow"],
      size: "L M S",
      link: "",
    },
  ];

  const CompareCard = ({ item }) => {
    let {
      img,
      title,
      price,
      brand,
      type,
      sku,
      availability,
      color,
      size,
      // link,
    } = item;
    return (
      <div className=" group flex flex-col w-full justify-self-start ">
        <div className="relative">
          <img src={img} alt="product" className="w-full"/>
          <GiCancel className="absolute text-3xl top-5 left-5  group-hover:block lg:hidden block cursor-pointer"/>
        </div>
        <div className="grid gap-4 font-medium mt-3">
          <h2 className="group-hover:underline underline-offset-4 decoration-2 cursor-pointer">{title}</h2>
          <p>{price}</p>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10">
          <p className="capitalize font-semibold  py-4 ">{"brand :"}</p>
          <p className="capitalize text-text-secondary">{brand}</p>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10">
          <p className="capitalize font-semibold  py-4 ">{"type :"}</p>
          <p className="capitalize text-text-secondary">{type}</p>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10">
          <p className="capitalize font-semibold  py-4 ">{"sku :"}</p>
          <p className="capitalize text-text-secondary">{sku}</p>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10">
          <p className="capitalize font-semibold  py-4 ">{"availability :"}</p>
          <p className="capitalize text-text-secondary">{availability}</p>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap gap-10 ">
          <p className="capitalize font-semibold  py-4 ">{"color :"}</p>
          <div className="flex gap-1">
          {color.map((item,i)=><div key={i} className="rounded-full h-6 aspect-square" style={{backgroundColor:item}}/>)}
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-slate-300 items-center whitespace-nowrap">
          <p className="capitalize font-semibold  py-4 ">{"size :"}</p>
          <p className="capitalize text-text-secondary">{size}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Compare" />
      <div className="max-w-[1450px] pt-16 px-4 w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full flex-wrap gap-5 items-center justify-between">
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
          {compareData.map((item, i) =><CompareCard item={item} key={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Compare;
