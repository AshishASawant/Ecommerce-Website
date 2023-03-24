import React from 'react'
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className='bg-bg-dull pt-16 grid place-items-center'>
        <div className=' bg-white max-w-[1450px] px-4 mx-4 grid place-items-center'>
            <Marquee speed={'40'}  > 
              <img src={require('../assets/images/brand-01.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-02.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-03.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-04.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-05.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-06.png')} className='mr-28' alt="brand" />
              <img src={require('../assets/images/brand-07.png')} className='mr-28' alt="brand" />
            </Marquee>
        </div>
    </section>
  )
}

export default Brands