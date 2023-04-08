import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const ForgotPassword = () => {
  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Forgot Password" />
      <div className="max-w-[1450px] pt-[7rem] pb-[3rem] px-4 w-full grid place-items-center md:min-h-full min-h-[73.9vh]">
        <div className="px-6 py-4 bg-bg-secondary max-w-[35rem] w-full shadow-md rounded-xl">
          <h2 className="sm:text-3xl text-2xl text-text-secondary text-center">Reset Your Password</h2>
          <p className="text-center mt-4 text-text-secondary">We will send you an email to reset your password</p>
          <form className="w-full mt-4 grid">
            <input
              type="text"
              placeholder="Email"
              className="p-4 bg-bg-dull w-full text-xl outline-none"
              required={true}
            />
            <div className="grid place-items-center grid-flow-row justify-around w-fit justify-self-center gap-2 mt-8">
              <button
                type="submit"
                className="w-min px-8 py-3  hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700 rounded-full"
              >
                Submit
              </button>
              <Link to='/login' className="w-min p-2 whitespace-nowrap">
                Cancle
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
