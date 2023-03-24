import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {
  IoHome,
  IoCallSharp,
  IoMail,
  IoInformationCircle,
} from "react-icons/io5";
const Contact = () => {
  return (
    <section className="grid place-items-center">
      <Breadcrumb title={"Contact"} />
      <div className="max-w-[1450px] w-full p-4 grid place-items-center gap-10 mt-5">
        <div className="w-full bg-white">
          <iframe
          title="CSMU"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.590941534853!2d73.17435131407531!3d18.949491960862872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f193838693d7%3A0x786832be24ddaffb!2sChhatrapati%20Shivaji%20Maharaj%20University!5e0!3m2!1sen!2sin!4v1679500862424!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full"
            allowFullScreen={true}
            loading='eager'
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-x-20 justify-between bg-white p-8 rounded-md drop-shadow-md w-full">
          <div>
            <h1 className="text-3xl font-medium">Contact</h1>
            <form className="w-full grid gap-5 mt-8">
              <input
                type="text"
                placeholder="Name"
                className="bg-bg-dull px-4 py-2 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-bg-dull px-4 py-2 w-full outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-bg-dull px-4 py-2 w-full outline-none"
              />
              <textarea
                rows="5"
                placeholder="Comment"
                className="bg-bg-dull px-4 py-2 w-full outline-none"
              />
            </form>
            <button className="px-6 py-2 rounded-3xl bg-slate-800 text-text-primary mt-7">
              Send
            </button>
          </div>
          <div>
            <h1 className="text-3xl font-medium mb-8">Get In Touch With Us</h1>
            <div className="flex gap-3 text-[.9rem] items-center mt-5 text-text-secondary">
              <span className="text-[1.3rem]">
                <IoHome />
              </span>
              33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
            </div>
            <div className="flex gap-3 text-[.9rem] items-center mt-5 text-text-secondary">
              <span className="text-[1.3rem]">
                <IoCallSharp />
              </span>
              (+91)7-723-4608
            </div>
            <div className="flex gap-3 text-[.9rem] items-center mt-5 text-text-secondary">
              <span className="text-[1.3rem]">
                <IoMail />
              </span>
              demo@company.com
            </div>
            <div className="flex gap-3 text-[.9rem] items-center mt-5 text-text-secondary">
              <span className="text-[1.3rem]">
                <IoInformationCircle />
              </span>
              Monday – Friday 10 AM – 8 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
