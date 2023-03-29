import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const CartCard = () => {
  return (
<div className="flex w-full items-center gap-4 md:gap-0 border-b flex-wrap justify-between border-slate-300 py-6 px-2 text-sm  text-text-secondary ">
          <div className="md:p-2 flex md:flex-1 w-full md:gap-8 gap-4">
            <img
              src={require("../assets/images/headphone.jpg")}
              alt="Product"
              className="w-20 aspect-square self-center rounded-md"
            />
            <div className="flex flex-wrap gap-2 gap-x-6 w-full items-center">
              <h5 className="text-base w-full ">
                Kids headphone bulk 10 pack multi colored for student
              </h5>
              <p className='w-fit'>Size : S</p>
              <p className="items-center w-fit gap-2 flex">
                Color :{" "}
                <span
                  className=" w-5 h-5 inline-block rounded-full"
                  style={{ backgroundColor: "red" }}
                ></span>
              </p>
            </div>
          </div>
          <div className="text-center w-1/6 p-2 text-base font-medium text-black hidden md:block">$100</div>
          <div className="text-center md:w-1/6 p-2 flex items-center justify-center gap-7 md:gap-5">
            <div className="border border-slate-300 flex w-min h-10 bg-secondary">
              <p className="p-3 ">1</p>
              <div className="flex flex-col">
                <button className="px-2 border-b border-l ">+</button>
                <button className="px-2 border-l">-</button>
              </div>
            </div>
            <button className="p-2 text-lg grid place-items-center hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700 rounded-full"><RiDeleteBin6Line/></button>
          </div>
          <div className="justify-end w-1/6 p-2 text-center text-base font-medium text-black">$100</div>
        </div>  )
}

export default CartCard