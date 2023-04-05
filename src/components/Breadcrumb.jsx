import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title className="capitalize">AlphaMart - {title}</title>
      </Helmet>
      <div className="flex items-center justify-center p-4 w-full font-normal bg-bg-secondary">
        <p className="capitalize"> <Link to='/' className="underline">Home</Link> / {title} </p>{" "}
      </div>
    </>
  );
};

export default Breadcrumb;
