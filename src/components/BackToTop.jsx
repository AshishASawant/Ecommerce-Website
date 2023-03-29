import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  useEffect(() => {
    document.addEventListener("scroll", showBtt);

    return () => {
        document.removeEventListener("scroll", showBtt);

    };
  }, []);

  let showBtt = () => {
    let btt = document.getElementById("back-to-top");
    window.scrollY >= 230 ? btt.style.opacity = ".8" : btt.style.opacity = "0";
  };

  return (
    <a href="#navbar" id="back-to-top" className="opacity-0 transition-all duration-500 z-50 fixed bg-bg-hover bottom-4  text-3xl p-1 rounded-lg right-4">
      <AiOutlineArrowUp/>
    </a>
  );
};

export default BackToTop;
