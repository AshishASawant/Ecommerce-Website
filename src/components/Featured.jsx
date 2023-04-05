import React from "react";
import { useSelector } from "react-redux";
import Productcard from './Productcard'


const Featured = ({title}) => {

  const product =useSelector((state)=>state.product)


  return (
    <section className="flex bg-bg-dull pt-16 items-center justify-center px-4 text-sm sm:text-base">
      <div className="max-w-[1450px] ">
        <h1 className="text-3xl mb-4">{title || 'Featured Product'}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4 gap-2">
          {product.data.map((item)=>{
              return((()=>{while(item.id<=6) { return <Productcard key ={item.id} props={item} />}})())
            
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
