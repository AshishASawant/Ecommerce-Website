import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeFavourite } from "../features/favouriteSlice";

const Wishlist = () => {
  const favourite = useSelector((state) => state.favourite);

  const WislistCard = ({ id }) => {
    const [curentItem, setCurentItem] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      getData();
      // eslint-disable-next-line
    }, []);

    const getData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      setCurentItem(res);
    };

    return (
      curentItem && (
        <div className="grid w-full gap-5 font-medium relative group p-1 h-full ">
          <div className="bg-bg-secondary p-4">
            <img
              src={curentItem?.image}
              alt="item"
              className="aspect-square w-full h-full"
            />
          </div>
          <GiCancel
            className="absolute text-2xl  top-2 right-2 cursor-pointer"
            onClick={() => dispatch(removeFavourite(curentItem?.id))}
          />
          <h3
            className="line-clamp-2 group-hover:underline underline-offset-2 sm:px-3 px-1 decoration-2 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(`../store/${curentItem.title}`, { state: curentItem });
            }}
          >
            {curentItem.title}
          </h3>
          <p className="line-clamp-2 sm:px-3 px-1">${curentItem?.price}</p>
        </div>
      )
    );
  };

  // useEffect(() => {
  //   console.log()
  // }, [third])

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Wishlist" />
      <div
        className="max-w-[1450px] pt-16 px-4 w-full md:min-h-full min-h-[73.9vh]"
        // style={{  minHeight: "c" }}
      >
        {favourite.length !== 0 ? (
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 w-full flex-wrap sm:gap-5 gap-x-2 gap-y-5 sm:gap-y-10 items-center justify-between">
            {favourite.map((item) => (
              <WislistCard key={item} id={item} />
            ))}
          </div>
        ) : (
          <p className="mt-16 w-full text-center">Your Wishlist Is Empty</p>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
