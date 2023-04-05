import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increaseQuatity,
  decreaseQuatity,
  removeFromCart,
  setCartTotal,
} from "../features/cartSlice";

const CartCard = ({ id }) => {
  const [mainCart, setMainCart] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    (async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      setMainCart(res);
      for (let i = 0; i < cart.item.length; i++) {
        if (cart.item[i].id === id) {
          setQuantity(cart.item[i].quantity);
        }
      }
    })();
  }, 
   // eslint-disable-next-line
  []);

  return (
    <div className="flex w-full items-center gap-4 md:gap-0 border-b flex-wrap justify-between border-slate-300 py-6 px-2 text-sm  text-text-secondary ">
      <div className="md:p-2 flex md:flex-1 w-full md:gap-8 gap-4">
        <img
          src={mainCart?.image}
          // src={''}
          alt="Product"
          className="w-20 aspect-square self-center rounded-md"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`../store/${mainCart.title}`, { state: mainCart });
          }}
        />
        <div className="flex flex-wrap gap-2 gap-x-6 w-full items-center">
          <h5 className="text-base w-full ">{mainCart.title} </h5>
          <p className="w-fit">Size : S</p>
          <p className="items-center w-fit gap-2 flex">
            Color : {id}
            <span
              className=" w-5 h-5 inline-block rounded-full"
              style={{ backgroundColor: "red" }}
            ></span>
          </p>
        </div>
      </div>
      <div className="text-center w-1/6 p-2 text-base font-medium text-black hidden md:block">
        {parseFloat (mainCart.price).toFixed(2)}
      </div>
      <div className="text-center md:w-1/6 p-2 flex items-center justify-center gap-7 md:gap-5">
        <div className="border border-slate-300 flex w-min h-10 bg-secondary">
          <p className="p-3 ">{quantity}</p>
          <div className="flex flex-col">
            <button
              className="px-2 border-b border-l"
              onClick={() => {
                dispatch(increaseQuatity(id));
                setQuantity(quantity + 1);
                // setTotal((prev) => prev + mainCart.price);
                dispatch(setCartTotal(Number(cart.cartTotal)+Number(mainCart.price)))
              }}
            >
              +
            </button>
            <button
              className="px-2 border-l"
              onClick={() => {
                dispatch(decreaseQuatity(id));
                setQuantity(quantity > 1 ? quantity - 1 : quantity);
                if (quantity > 1) {
                  // setTotal((prev) => prev - mainCart.price);
                  dispatch(setCartTotal(Number(cart.cartTotal)-Number(mainCart.price)))

                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <button
          className="p-2 text-lg grid place-items-center hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700 rounded-full"
          onClick={() => {
            dispatch(removeFromCart(id));
            // setTotal((prev) => prev - mainCart.price * quantity);
            dispatch(setCartTotal(Number(cart.cartTotal)-Number(mainCart.price*quantity)))
          }}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="justify-end w-1/6 p-2 text-center text-base font-medium text-black">
        $ {(Number(quantity) * Number(mainCart.price)).toFixed(2)}
      </div>
    </div>
  );
};

export default CartCard;
