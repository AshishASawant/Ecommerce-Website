import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title className="capitalize">{title}</title>
      </Helmet>
      <div className="flex items-center justify-center p-4 w-full font-normal bg-white">
        <p className="capitalize"> <Link to='/'>Home</Link> / {title} </p>{" "}
      </div>
    </>
  );
};

export default Breadcrumb;
