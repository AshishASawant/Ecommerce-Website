import React from "react";
import Productcard from "./Productcard";

const Featured = () => {
  const featuredProduct = [
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicolored",
      rating: "4",
      price: "$100.00",
    },
    {
      img: require('../assets/images/watch.jpg'),
      brand: "sony",
      title: "Kids headphone bulk 10 Pack Multicoloredv for student",
      rating: "4",
      price: "$100.00",
    },

  ];

  return (
    <section className="flex bg-bg-dull pt-16 items-center justify-center px-4">
      <div className="max-w-[1450px] ">
        <h1 className="text-3xl mb-4">Featured Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {featuredProduct.map((item,i)=>{
            return(<Productcard key={i} img={item.img} brand={item.brand} title={item.title} rating={item.rating} price={item.price} />)
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
