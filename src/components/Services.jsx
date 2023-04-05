import React from "react";
import {TbTruckDelivery,TbDiscount} from 'react-icons/tb'
import {AiFillGift,AiFillCreditCard} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'

const Services = () => {
  const service = [
    {
      logo: TbTruckDelivery,
      title: "free shipping",
      description: "From all orders over $100",
    },
    {
      logo: AiFillGift,
      title: "daily surprice offers",
      description: "Save upto 25% off",
    },
    {
      logo: BiSupport,
      title: "support 24/7",
      description: "Shop with an expert",
    },
    {
      logo: TbDiscount,
      title: "Affordable prices",
      description: "Get factory directed price",
    },
    {
      logo: AiFillCreditCard,
      title: "secure payments",
      description: "100% payment protection",
    },
  ];
  return (
    <section className="bg-bg-dull grid place-items-center w-full">
        <div className=" grid sm:grid-cols-5 grid-cols-2 sm:p-12 p-4 gap-5 place-items-center max-w-[1450px] w-full">
            {service.map(item=>{ return(
                <div className="flex items-center gap-4 flex-col lg:flex-row" key={item.title}>
                    <item.logo className="text-5xl sm:text-3xl"/>
                    <div className="text-center">
                        <h2 className='capitalize text-md sm:text-lg'>{item.title}</h2>
                        <p className="text-text-secondary text-sm sm:text-md">{item.description}</p>
                    </div>
                </div>
            )})}
        </div>
    </section>
  );
};

export default Services;
