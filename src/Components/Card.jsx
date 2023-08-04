import React from "react";

const Card = ({ bookName, authorName, bookLink }) => {
  return (
    <div>
      <div className="bg-gray-300 grid h-64">
        <h3 className="font-bold">{bookName}</h3>
        {authorName}
        <a href={bookLink} target="_blank">
          <button className="px-5 py-1.5 bg-pink-600 text-white font-bold rounded-lg">Link</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
