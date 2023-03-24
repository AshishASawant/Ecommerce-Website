import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-wrap justify-between gap-3  bg-bg-primary text-text-secondary py-2 md:px-10 px-5 text-sm border-b-2 border-border-primary'>
      <div>
        <span>Free Shipping over $100 and free return</span>
      </div>
        <div className='flex  gap-3 flex-wrap'>
        <div className='w-full sm:w-max'>
          <a href='tel:+91 1234567890'>Hotline:(+91) 1234567890</a>
        </div>
        <div>
          <select name="Language" id="language" className='bg-bg-primary outline-none '>
            <option value="English" className=''>English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div>
          <select name="Language" id="language" className='bg-bg-primary outline-none'>
            <option value="English">$USD</option>
            <option value="hindi">Rupee</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header