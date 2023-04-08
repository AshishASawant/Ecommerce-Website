import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Login = () => {
  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title="Login" />
      <div className="max-w-[1450px] pt-[7rem] pb-[3rem] md:px-4 px-2  w-full grid place-items-center md:min-h-full min-h-[73.9vh]">
        <div className="px-6 py-10  bg-bg-secondary max-w-[35rem] w-full shadow-md rounded-xl">
          <h2 className="text-3xl text-text-secondary text-center">Login</h2>
          <form className="w-full mt-4 grid">
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-bg-dull w-full text-xl outline-none"
              required={true}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 bg-bg-dull w-full mt-6 text-xl outline-none"
              required={true}
            />
            <Link
              to="/forgotpassword"
              className="mt-2 text-base underline hover:decoration-2 underline-offset-2 cursor-pointer"
            >
              Forgot your password?
            </Link>
            <div className="grid place-items-center grid-flow-col justify-around w-fit justify-self-center gap-5 mt-6">
              <button
                type="submit"
                className="w-min px-8 py-3 hover:bg-bg-hover text-text-primary hover:text-text-secondary bg-slate-700  rounded-full"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="w-min px-8 py-3  bg-bg-hover hover:text-text-primary text-text-secondary hover:bg-slate-700 rounded-full whitespace-nowrap"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
