import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import {GiCancel} from 'react-icons/gi'

const Wishlist = () => {

    const WislistCard=({item})=>{
        return(
            <div className='grid w-full gap-5 font-medium relative group'>
                <img src='//cdn.shopify.com/s/files/1/0620/5082/8457/products/19.jpg?v=1655097254&width=269' alt="item" />
                <GiCancel className='absolute text-2xl  top-2 right-2 cursor-pointer  '/>
                <h3 className='line-clamp-2 group-hover:underline underline-offset-2 sm:px-3 px-1 decoration-2 cursor-pointer'>Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera</h3>
                <p className='line-clamp-2 sm:px-3 px-1'>$10.00</p>
            </div>
        )
    }

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Wishlist" />
      <div className="max-w-[1450px] pt-16 px-4 w-full">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full flex-wrap sm:gap-5 gap-x-2 gap-y-5 sm:gap-y-10 items-center justify-between">
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
          {<WislistCard item='1'/>}
        </div>
      </div>
    </section>
  )
}

export default Wishlist