import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  
  
  return (
    <section className="grid place-items-center">
      <Breadcrumb title="Cart" />
      {cart.item.length!==0?<div className="flex flex-col w-full md:pt-16  px-4">
        <div>
          <div className=" w-full  items-center border-b border-slate-300 pb-3 uppercase text-text-secondary font-medium hidden md:flex">
            <h3 className="p-2 flex-1">Product</h3>
            <h3 className="text-center w-1/6 p-2">Price</h3>
            <h3 className="text-center w-1/6 p-2">Quantity</h3>
            <h3 className="text-center w-1/6 p-2">Total</h3>
          </div>
          {cart.item.map(item=><CartCard key={item.id} id={item.id}/>)}
        </div>
        <div>
          <Link
            to="/"
            className=" hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700  text-primary px-6 py-2 inline-block rounded-full w-fit mt-5"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="text-text-secondary md:w-fit w-full flex flex-col gap-4 md:self-end md:items-end items-center mt-8 md:mr-4">
          <div className="flex items-center gap-5">
            <p>Subtotal</p>
            <p className="font-medium text-lg">${cart.cartTotal}</p>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <Link
            to="/"
            className=" hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700  text-primary px-6 py-2 inline-block rounded-full w-full text-center"
          >
            Checkout
          </Link>
        </div>
      </div>:<p className="w-full text-center pt-16">Your Cart Is Empty</p>}
    </section>
  );
};

export default Cart;
