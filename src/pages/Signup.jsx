import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Signup = () => {
  return (
<section className="grid place-items-center w-full">
    <Breadcrumb title="Signup" />
    <div className="max-w-[1450px] pt-[7rem] pb-[3rem] px-4 w-full grid place-items-center ">
      <div className='px-8 py-10  bg-bg-secondary max-w-[35rem] w-full shadow-md rounded-xl'>
        <h2 className='text-3xl text-text-secondary text-center mb-6'>Create Account</h2>
        <form className='w-full mt-4 grid gap-5'>
            <input type="text" placeholder='First Name' className='p-4 bg-bg-dull w-full text-xl outline-none  '   required={true} />
            <input type="text" placeholder='Last Name' className='p-4 bg-bg-dull w-full text-xl outline-none'  required={true} />
            <input type="email" placeholder='Email' className='p-4 bg-bg-dull w-full text-xl outline-none'  required={true} />
            <input type="password" placeholder='Password' className='p-4 bg-bg-dull w-full text-xl outline-none'  required={true} />
            <input type="password" placeholder='Password' className='p-4 bg-bg-dull w-full text-xl outline-none'  required={true} />
            <button type='submit' className='w-min px-8 py-3 hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700  rounded-full justify-self-center mt-3'>Create</button>
        </form>
      </div>
    </div>
  </section>    )
}

export default Signup