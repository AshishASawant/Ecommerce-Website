import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { GiClothes } from "react-icons/gi";
import { RiTruckLine } from "react-icons/ri";
import { AiFillCaretDown, AiOutlineShareAlt } from "react-icons/ai";
import { TfiRulerAlt } from "react-icons/tfi";
import Featured from "../components/Featured";
import CommentCard from "../components/CommentCard";
import Zoom from "react-img-hover-zoom";

const SingleProduct = () => {
  const handleClick = (e, val) => {
    e.target.classList.toggle("rotate180");
    document.getElementById(val).classList.toggle("show");
  };

  const CommentDetails = [
    {
      rating: 4,
      title: "Good",
      userName: "Someone",
      date: "27 Mar,2023",
      desc: "value for money product",
      response:
        "Thank you for your purchase from. Please let us know if we can do anything else for you!",
    },
    {
      rating: 4,
      title: "Good",
      userName: "Someone",
      date: "27 Mar,2023",
      desc: "value for money product",
      response: "",
    },
    {
      rating: 4,
      title: "Good",
      userName: "Someone",
      date: "27 Mar,2023",
      desc: "value for money product",
      response: "",
    },
    {
      rating: 4,
      title: "Good",
      userName: "Someone",
      date: "27 Mar,2023",
      desc: "value for money product",
      response: "",
    },
    {
      rating: 4,
      title: "Good",
      userName: "Someone",
      date: "27 Mar,2023",
      desc: "value for money product",
      response:
        "Thank you for your purchase from. Please let us know if we can do anything else for you!",
    },
  ];

  return (
    <>
      <section className="grid place-items-center w-full">
        <Breadcrumb title={"singleProduct"} />
        <div className="max-w-[1450px] sm:px-4 px-2 w-full">
          <div className="bg-white grid md:grid-cols-2 grid-cols-1 w-full gap-5 my-10 rounded-md sm:p-6 p-4">
            <div className="flex flex-col gap-5 overflow-hidden w-full items-center">
              <div className=" border border-slate-300 w-full">

              <Zoom
                img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-02_884x.jpg?v=1655098000"
                zoomScale={1.5}
                width={670}
                height={600}
                style={{}}
                transitionTime={0.3}
                className='cursor-move'
                />
                </div>
              <div className="grid w-full md:grid-cols-2 grid-cols-4 md:gap-5 gap-1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-02_884x.jpg?v=1655098000"
                  alt="product"
                  className="border border-slate-300"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-02_884x.jpg?v=1655098000"
                  alt="product"
                  className="border border-slate-300"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-02_884x.jpg?v=1655098000"
                  alt="product"
                  className="border border-slate-300"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-02_884x.jpg?v=1655098000"
                  alt="product"
                  className="border border-slate-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 text-sm sticky top-2 h-min">
              <h2 className="text-lg font-semibold h-min">
                Kids Headphones Bulk 10 Pack Multi Colored For Students
              </h2>
              <div className=" border-y-2 border-slate-300 flex flex-col gap-3 py-3">
                <p className="font-semibold text-lg">$100</p>
                <div className="flex gap-1 items-center">
                  <ReactStars
                    size={20}
                    value={4}
                    edit={false}
                    className="inline-block"
                  />
                  <p>(3 reviews)</p>
                </div>
              </div>
              <div className="grid gap-5 py-3">
                <p className="text-text-secondary">
                  <span className="font-semibold text-black">Type : </span>
                  Headset
                </p>
                <p className="text-text-secondary">
                  <span className="font-semibold text-black">Brand : </span>Sony
                </p>
                <div>
                  <h3 className="font-semibold">Categories :</h3>
                  <p className="text-text-secondary">
                    airpodscamera'sComputers & Laptopheadphonesmini speakerour
                    storePortable Speakerssmart phonesSmart
                    TelevisionSmartwatches
                  </p>
                </div>
                <div className="flex gap-1">
                  <h3 className="font-semibold">Tags :</h3>
                  <p className="text-text-secondary">
                    headphones laptop mobile oppo speaker
                  </p>
                </div>
                <p className="text-text-secondary">
                  <span className="font-semibold text-black">SKU : </span>SKU027
                </p>
                <p className="text-text-secondary">
                  <span className="font-semibold text-black">
                    Availability :{" "}
                  </span>
                  Instock
                </p>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Size :</h3>
                  <ul className="flex gap-1">
                    <li className="text-text-secondary py-1 px-5 border-2 border-slate-300">
                      S
                    </li>
                    <li className="text-text-secondary py-1 px-5 border-2 border-slate-300">
                      M
                    </li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Color :</h3>
                  <ul className="flex gap-4 mt-2">
                    <li className="text-text-secondary bg-red-500 rounded-full p-4 outline outline-offset-4"></li>
                    <li className="text-text-secondary bg-red-900 rounded-full p-4 outline outline-offset-4"></li>
                  </ul>
                </div>
                <div className="flex flex-wrap mt-3 items-center gap-10">
                  <h4 className="font-semibold">Quantity</h4>
                  <div className="border border-slate-300 flex w-min h-10">
                    <p className="p-3">1</p>
                    <div className="flex flex-col">
                      <button className="px-2 border-b border-l ">+</button>
                      <p className="px-2 border-l">-</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to="/"
                      className="rounded-full px-6 sm:text-base text-sm py-2 bg-slate-500 text-text-secondary"
                    >
                      Sold Out
                    </Link>
                    <Link
                      to="/"
                      className="rounded-full px-6 sm:text-base text-sm py-2 bg-orange-500"
                    >
                      By It Now
                    </Link>
                  </div>
                </div>
                <div className="flex gap-10 mt-4">
                  <div className="flex items-center gap-2">
                    <BsHeartFill className="text-xl" />
                    <Link>Add to wishlist</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <GrPowerCycle className="text-xl" />
                    <Link>Add to wishlist</Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col border-b border-slate-300 py-3">
                  <div className="relative flex gap-3">
                    <RiTruckLine className="text-xl" />
                    <p>Shipping & Returns</p>
                    <AiFillCaretDown
                      className=" absolute right-2 text-xl cursor-pointer"
                      onClick={(e) => handleClick(e, 1)}
                    />
                  </div>
                  <div
                    className="text-text-secondary h-0 overflow-hidden px-2 text-base"
                    id="1"
                  >
                    <p>Free shipping and returns available on all orders!</p>
                    <p>
                      We ship all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col border-b border-slate-300 py-3">
                  <div className="relative flex gap-3">
                    <GiClothes className="text-xl" />
                    <p>Materials</p>
                    <AiFillCaretDown
                      className=" absolute right-2 text-xl cursor-pointer"
                      onClick={(e) => handleClick(e, 2)}
                    />
                  </div>
                  <div
                    className="text-text-secondary h-0 overflow-hidden px-2 text-base"
                    id="2"
                  >
                    <p>Free shipping and returns available on all orders!</p>
                    <p>
                      We ship all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col border-b border-slate-300 py-3">
                  <div className="relative flex gap-3">
                    <TfiRulerAlt className="text-xl" />
                    <p>Dimentions</p>
                    <AiFillCaretDown
                      className=" absolute right-2 text-xl cursor-pointer bg-white"
                      onClick={(e) => handleClick(e, 3)}
                    />
                  </div>
                  <div
                    className="text-text-secondary h-0 overflow-hidden px-2 text-base"
                    id="3"
                  >
                    <p>Free shipping and returns available on all orders!</p>
                    <p>
                      We ship all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col border-b border-slate-300 py-3">
                  <div className="relative flex gap-3">
                    <BsHeart className="text-xl" />
                    <p>Care Instruction</p>
                    <AiFillCaretDown
                      className=" absolute right-2 text-xl cursor-pointer"
                      onClick={(e) => handleClick(e, 4)}
                    />
                  </div>
                  <div
                    className="text-text-secondary h-0 overflow-hidden px-2 text-base"
                    id="4"
                  >
                    <p>Free shipping and returns available on all orders!</p>
                    <p>
                      We ship all US domestic orders within 5-10 business days!
                    </p>
                  </div>
                </div>
              </div>
              <Link className="flex items-center gap-3">
                <AiOutlineShareAlt className=" text-xl" />
                <p>Share</p>
              </Link>
              <div className="grid place-items-center p-6 bg-bg-dull mt-5 gap-4">
                <p className="text-lg font-semibold">Payment Methods</p>
                <div className="flex gap-3 flex-wrap justify-between">
                  <img
                    src="https://www.visa.com/images/merchantoffers/2022-08/1659942409312.visa-logo-800x450.jpg"
                    className="w-11 rounded-sm border-2 border-slate-300"
                    alt="payment"
                  />
                  <img
                    src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1990_100_2x.png"
                    className="w-11 rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                  <img
                    src="https://telecomtalk.info/wp-content/uploads/2022/12/gpay-how-to-create-or-find-upi.jpg"
                    className="w-11 rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                  <img
                    src="https://nuvei.com/wp-content/uploads/2021/06/phonepe.png"
                    className="w-11 rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                  <img
                    src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg"
                    className="w-11 h-8 rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                  <img
                    src="https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/06/27150459/rupay-1.jpg"
                    className="w-11  rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/002/952/794/original/cash-on-delivery-steacker-free-vector.jpg"
                    className="w-11 p-[2px] rounded-sm border-2 border-slate-300 bg-white"
                    alt="payment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col sm:p-4 p-2 gap-5">
          <h1 className="text-3xl font-medium">Reviews</h1>
          <div className="bg-white sm:px-6 px-2 rounded-md py-2">
            <div className="py-8  border-b px-2">
              <h2 className="sm:text-xl text-lg mb-3">
                Average Customer Reviews
              </h2>
              <div className="flex flex-col sm:flex-row gap-1 sm:items-center text-text-secondary text-sm">
                <ReactStars
                  size={20}
                  value={4}
                  color2="red"
                  edit={false}
                  half={true}
                />
                <p className="text-sm sm:text-base">(Based on 3 reviews)</p>
              </div>
            </div>
            {CommentDetails.map((item, i) => (
              <CommentCard item={item} key={i} />
            ))}
          </div>
        </div>
      </section>
      <Featured />
    </>
  );
};

export default SingleProduct;
