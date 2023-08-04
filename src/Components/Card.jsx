import React from "react";

const Card = ({ bookName, authorName, bookLink }) => {
  return (
    <div className="bg-[#2d2d2d] text-[#dbdbdb]  rounded-lg p-4 h-auto shadow-md w-full">
      <h3 className="text-xl font-semibold mb-2">{bookName}</h3>
      <p className="text-base text-[#6153ff]">{authorName}</p>
      <a href={bookLink} target="_blank" rel="noopener noreferrer">
        <button className="mt-4 px-5 py-1.5 text-white bg-[#2d2d2d] border font-semibold  hover:bg-[#6153ff] hover:border-none hover:rounded-full transition">
          Get Book
        </button>
      </a>
    </div>
  );
};

export default Card;
