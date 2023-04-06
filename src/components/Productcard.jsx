import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavourite, removeFavourite } from "../features/favouriteSlice";
import { addToCart, removeFromCart, setCartTotal } from "../features/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { removeCompare, setCompare } from "../features/compareSlice";

const Productcard = ({ props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favourite, cart, compare } = useSelector((state) => state);
  const [details, setDetails] = useState({
    cart: false,
    favourite: false,
    compare: false,
  });

  const changePage = () => {
    window.scrollTo(0, 0);
    navigate(`/store/${title}`, { state: props });
  };

  const { title, price, image, rating, id } = props;

  useEffect(
    () => {
      for (let i = 0; i < cart.item.length; i++) {
        if (cart.item[i].id === id) {
          setDetails({ ...details, cart: true , 'quantity':cart.item[i].quantity});
        }
      }
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div className="p-4 bg-bg-secondary  capitalize flex flex-col rounded-md relative group  overflow-hidden h-min gap-1">
      <div className="flex items-center justify-center  cursor-pointer h-[55%] p-2">
        {/* <img src={images[1]} alt={title} className='' /> */}
        <img
          src={image}
          alt={title}
          className="aspect-square lg:p-4"
          onClick={changePage}
        />
      </div>
      <p className="text-orange-500 font-semibold pt-2">Unknown</p>
      <h2 className=" font-medium overflow-clip line-clamp-1 mb-1 ">{title}</h2>
      <ReactStars size={25} value={rating.rate} edit={false} />
      <p className="font-normal flex pt-2">$ {price}</p>
      {favourite.includes(id) ? (
        <AiFillHeart
          className="absolute top-3 right-4 w-6 h-6 text-red-500"
          onClick={() => dispatch(removeFavourite(id))}
        />
      ) : (
        <img
          src="../images/wish.svg"
          alt="wish"
          className="absolute top-3 right-4 sm:w-max sm:h-max w-6 h-6 p-1 cursor-pointer"
          onClick={() => dispatch(setFavourite(id))}
        />
      )}
      <div className="absolute hidden right-4 lg:translate-x-16  sm:top-12 top-9 flex-col lg:flex sm:gap-3 justify-evenly group-hover:translate-x-0">
        <img
          src="../images/prodcompare.svg"
          alt="something"
          style={{ backgroundColor: !compare.includes(id) ? "" : "orange" }}
          className="rounded-full hover:bg-bg-hover sm:w-max sm:h-max w-6 h-6 p-1 cursor-pointer"
          onClick={(e) => {
            if (!compare.includes(id)) {
              dispatch(setCompare(id));
              e.target.style.backgroundColor = "orange";
            }
            else{
              dispatch(removeCompare(id));
              e.target.style.backgroundColor = "white";
            }
          }}
        />
        {/* {!favourite.includes(id) && (
          <img
            src="images/view.svg"
            className="rounded-full hover:bg-bg-hover p-1"
            alt="something"
            onClick={() => dispatch(setFavourite(id))}
          />
        )} */}
        <img
          src="../images/add-cart.svg"
          alt="something"
          className="rounded-full hover:bg-orange-200 p-1 cursor-pointer"
          style={{ backgroundColor: !details.cart ? "" : "orange" }}
          onClick={(e) => {
            if (!details.cart) {
              dispatch(addToCart({ id, quantity: 1 }));
              dispatch(setCartTotal(Number(cart.cartTotal)+Number(price)))
              e.target.style.backgroundColor = "orange";
              setDetails({ ...details, cart: true });
              
            } else {
              setDetails({ ...details, cart: false });
              dispatch(removeFromCart(id));
              dispatch(setCartTotal((Number(cart.cartTotal)-Number(price*details.quantity))))
              e.target.style.backgroundColor = "white";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Productcard;
