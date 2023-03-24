import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Productcard = ({img,brand,title,rating,price}) => {

  return (
    <div className='p-4 bg-white  capitalize flex flex-col rounded-md relative hover-img overflow-hidden h-min gap-1'>
      <div className='flex items-center justify-center  cursor-pointer h-[55%]'>
        <img src={img} alt={title} className='' />
        {/* <img src={image} alt={title} className='' /> */}
      </div>
        <p className='text-orange-500 font-semibold pb-2'>{brand}</p>
        <h2 className=' font-medium overflow-clip line-clamp-2'>{title}</h2>
        <ReactStars size={25} value={Number(rating)} edit={false} />
        <p className='font-normal flex'>{price}</p>
      <Link><img src='images/wish.svg' className='absolute top-3 right-3' /></Link>
      <div className='absolute flex right-3 translate-x-8  top-9 flex-col gap-2 hidden-div'>
      <Link><img src='images/prodcompare.svg' alt='something' /></Link>
      <Link><img src='images/view.svg' alt='something' /></Link>
      <Link><img src='images/add-cart.svg' alt='something' /></Link>
      </div>
    </div>
  
  )
}

export default Productcard