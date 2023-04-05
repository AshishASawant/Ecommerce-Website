import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ props }) => {
  const {  title, userName, date, desc, response } = props;
  return (
    <div className="w-full px-2 py-5 border-t">
      <ReactStars size={20} value={4} color2="red" edit={false} half={true} />
      <p  className="font-medium mb-1">{title}</p>
      <p className="font-medium italic text-sm mb-2">{userName} <span className="font-normal text-text-secondary not-italic">on</span> {date}</p>
      <p className="text-text-secondary">{desc}</p>
      {response && <div className="bg-bg-dull text-sm md:ml-24 px-4 py-6 rounded-md mt-5">
        <h3 className="text-lg mb-2"> - AlphaMart</h3>
        <p className="text-text-secondary">{response}</p>
        </div>}

    </div>
  );
};

export default ReviewCard;
