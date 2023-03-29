import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
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
        link: "/",
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
  return (
    <footer className="bg-bg-primary mt-16">
      <div className="h-12 border-b-2 border-white " />
      <div className="flex flex-wrap text-text-primary sm:justify-evenly md:px-16 sm:py-8 justify-between p-6 gap-2">
        <div className="p-2">
          <h1 className="text-xl font-medium mb-3">Contact US</h1>
          <div className="text-text-secondary">
            <address className="mb-3">
              Demo Store No.1234 <br/> Freedom, New York, <br/>1111 United States
            </address>
            <p className="mb-3">+91-1234567890</p>
            <p className="mb-3">alphamart@gmail.com</p>
          </div>
          <div className="flex items-center">
            {mediaContact.map((item) => {
              return (
                <div
                  key={item.platformName}
                  className="text-2xl p-1.5 mr-2 overflow-hidden rounded-full bg-slate-700 grid items-center"
                >
                  <Link to={item.link}>
                    <item.logo />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {otherInfo.map((item) => {
          return <div className="p-2" key={item.heading}>
            <h1 className="mb-3 font-medium text-xl">{item.heading}</h1>
            {item.subHeadings.map(subitem=>{
              return(
              <Link key={subitem.title} to={subitem.link} className='mb-1 block text-text-secondary'>{subitem.title}</Link>)
            })}
          </div>;
        })}
      </div>
      <div className="h-12 border-t-2 border-white px-16 py-2 flex items-center justify-center"><p className="text-text-primary font-md">©2023.Alphamart</p></div>
    </footer>
  );
};

export default Footer;
