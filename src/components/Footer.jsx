import React from "react";
import { AiFillCaretUp, AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";

const mediaContact = [
  {
    platformName: "twitter",
    logo: AiOutlineTwitter,
    link: "https:/ashishsawant.netlify.app",
  },
  {
    platformName: "instagram",
    logo: AiFillInstagram,
    link: "https:/ashishsawant.netlify.app",
  },
  {
    platformName: "facebook",
    logo: AiFillFacebook,
    link: "https:/ashishsawant.netlify.app",
  },
  {
    platformName: "youtube",
    logo: AiFillYoutube,
    link: "https:/ashishsawant.netlify.app",
  },
  {
    platformName: "pinterest",
    logo: BsPinterest,
    link: "https:/ashishsawant.netlify.app",
  },
];

const otherInfo = [
  {
    heading: "Information",
    subHeadings: [
      {
        title: "Privacy Policy",
        link: "/privacy",
      },
      {
        title: "Refund Policy",
        link: "/refund",
      },
      {
        title: "Shipping Policy",
        link: "/shipping",
      },
      {
        title: "Terms of Service",
        link: "/termsofservice",
      },
      {
        title: "Blogs",
        link: "/blogs",
      },
    ],
  },
  {
    heading: "Account",
    subHeadings: [
      {
        title: "Search",
        link: "/",
      },
      {
        title: "About",
        link: "/",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
      {
        title: "Contact",
        link: "/contact",
      },
      {
        title: "Size Chart",
        link: "/sizechart",
      },
    ],
  },
  {
    heading: "Quick Links",
    subHeadings: [
      {
        title: "Accessories",
        link: "/",
      },
      {
        title: "Laptop",
        link: "/",
      },
      {
        title: "Headphones",
        link: "/",
      },
      {
        title: "Smartwatches",
        link: "/",
      },
      {
        title: "Tablets",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
 
  const handleFooter = () => {
    document.getElementById("main-footer").classList.toggle("hide");
  };

  return (
    <footer className="bg-bg-primary mt-16 ">
      <div className="h-[48px]  flex items-center justify-between  px-6 z-40 md:z-0  relative bg-bg-primary shadow-sm shadow-white">
        <p className="text-text-primary font-md md:hidden">©2023.Alphamart</p>
        <AiFillCaretUp
          className="text-text-primary text-xl md:hidden cursor-pointer"
          onClick={(e) => {
            e.target.classList.toggle('rotate180')
            handleFooter();
            window.scrollTo(0, document.body.scrollHeight);
          }}
        />
      </div>
      <div
        className="flex flex-wrap text-text-primary sm:justify-evenly md:px-16 md:py-6 md:justify-evenly  gap-2 h-0 md:h-full overflow-hidden "
        id="main-footer"
      >
        <div className="p-2 flex md:flex-initial flex-1 flex-col ">
          <h1 className="text-xl font-medium mb-3">Contact US</h1>
          <div className="text-text-secondary">
            <address className="mb-3">
              Demo Store No.1234 <br /> Freedom, New York, <br />
              1111 United States
            </address>
            <p className="mb-3">+91-1234567890</p>
            <p className="mb-3">alphamart@gmail.com</p>
          </div>
          <div className="flex items-center  md:flex-initial">
            {mediaContact.map((item) => {
              return (
                <div
                  key={item.platformName}
                  className="md:text-2xl rext-xs md:p-1.5 p-1 mr-2 overflow-hidden rounded-full bg-slate-700 grid items-center"
                >
                  <Link to={item.link} className="line-clamp-1 text-clip">
                    <item.logo />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {otherInfo.map((item) => {
          return (
            <div className="p-2 flex md:flex-initial flex-1 flex-col " key={item.heading}>
              <h1 className="mb-3 font-medium text-xl">{item.heading}</h1>
              {item.subHeadings.map((subitem) => {
                return (
                  <Link
                    key={subitem.title}
                    to={subitem.link}
                    className="mb-1 block text-text-secondary line-clamp-1 text-clip"
                  >
                    {subitem.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="h-12 border-t-2 border-white px-16 py-2 md:flex items-center justify-center hidden ">
        <p className="text-text-primary font-md">©2023.Alphamart</p>
      </div>
    </footer>
  );
};

export default Footer;
