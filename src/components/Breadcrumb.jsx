import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, newPath }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title className="capitalize">AlphaMart - {title}</title>
      </Helmet>
      <div className="flex items-center justify-center p-4 w-full font-normal bg-bg-secondary">
        <p className="capitalize">
          {" "}
          <Link to="/" className="underline">
            Home<span className="no-underline inline-block">&nbsp; / &nbsp;</span>
          </Link>
          <Link to={"./"} className="underline capitalize">
            { newPath && <>{newPath}<span className="no-underline inline-block">&nbsp; / &nbsp;</span></>}
          </Link>
          {title}
        </p>
      </div>
    </>
  );
};

export default Breadcrumb;
