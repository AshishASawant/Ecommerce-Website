import React from "react";

const Product = () => {
  const productItem = [
    {
      img: require("../assets/images/laptop.jpg"),
      title: "Computer & Laptop",
      subtitle: "6 items",
    },
    {
      img: require("../assets/images/camera.jpg"),
      title: "Cameras",
      subtitle: "6 items",
    },
    {
      img: require("../assets/images/tv.jpg"),
      title: "Smart TV",
      subtitle: "6 items",
    },
    {
      img: require("../assets/images/watch.jpg"),
      title: "Smart Watches",
      subtitle: "6 items",
    },
    {
      img: require("../assets/images/headphone.jpg"),
      title: "Headphones",
      subtitle: "6 items",
    },

  ];

  return (
    <section className="grid  bg-bg-dull place-items-center">
      <div className="max-w-[1450px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  bg-white shadow-md p-2 mx-4" >
        {productItem.map((item,i)=>{
            return(
                <div key={i} className="flex flex-wrap-reverse sm:flex-nowrap sm:flex-row gap-1 items-center  p-2 w-full justify-center border-red">
                    <div className="flex flex-col  justify-center gap-1 w-full items-center">
                        <h2 className="font-semibold text-md">{item.title}</h2>
                        <p className="text-text-secondary text-sm">{item.subtitle}</p>
                    </div>
                    <img src={item.img} className=' w-20 sm:w-32' alt="product"/>
                </div>
            )
        })}
        {productItem.map((item,i)=>{
            return(
                <div key={i} className="flex flex-wrap-reverse sm:flex-nowrap sm:flex-row gap-1 items-center  p-2 w-full justify-center border-red">
                    <div className="flex flex-col  justify-center gap-1 w-full items-center">
                        <h2 className="font-semibold text-md">{item.title}</h2>
                        <p className="text-text-secondary text-sm">{item.subtitle}</p>
                    </div>
                    <img src={item.img} className=' w-20 sm:w-32' alt="product"/>
                </div>
            )
        })}
        </div>
    </section>
  );
};

export default Product;
