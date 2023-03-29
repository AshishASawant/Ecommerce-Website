import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai'

const Productcard = ({img,brand,title,rating,price}) => {

  return (
    <div className='p-4 bg-bg-secondary  capitalize flex flex-col rounded-md relative group  overflow-hidden h-min gap-1'>
      <div className='flex items-center justify-center  cursor-pointer h-[55%]'>
        <img src={img} alt={title} className='' />
        {/* <img src={image} alt={title} className='' /> */}
      </div>
        <p className='text-orange-500 font-semibold pb-2'>{brand}</p>
        <h2 className=' font-medium overflow-clip line-clamp-2'>{title}</h2>
        <ReactStars size={25} value={Number(rating)} edit={false} />
        <p className='font-normal flex'>{price}</p>
      <Link><img src='images/wish.svg' alt='wish' className='absolute top-3 right-4 sm:w-max sm:h-max w-6 h-6 p-1' fill='red'/></Link>
      <AiFillHeart className='absolute top-3 right-4 w-6 h-6 text-red-500'/>
      <div className='absolute flex right-4 lg:translate-x-16  sm:top-10 top-9 flex-col sm:gap-1 group-hover:translate-x-0'>
      <Link><img src='images/prodcompare.svg' alt='something' className='rounded-full hover:bg-bg-hover sm:w-max sm:h-max w-6 h-6 p-1' /></Link>
      <Link><img src='images/view.svg' className='rounded-full hover:bg-bg-hover p-1' alt='something' /></Link>
      <Link><img src='images/add-cart.svg' alt='something' className='rounded-full hover:bg-bg-hover p-1' /></Link>
      </div>
    </div>
  
  )
}

export default Productcard