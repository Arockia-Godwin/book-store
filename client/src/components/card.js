import React from "react";

const Card = ({ data, type }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="shadow-lg rounded-lg max-w-sm bg-[#979797]">
        <img
          className="rounded-tl-lg rounded-tr-lg w-full h-[100px] object-contain"
          src={data.image}
          alt={data.name}
        />

        <div className="px-5 pb-5">
          <h3 className="text-gray-900 text-left font-semibold text-xl tracking-tight dark:text-white">
            {data.name}
          </h3>

          <div className="flex items-center mb-5">
            <h3 className="text-gray-900 text-lg tracking-tight dark:text-white">
              {data.author}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl mr-4 text-gray-900 dark:text-white">
              {data.price}
            </span>
            {type === "books" ? (
              <a
                href="/books"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            ) : (
              <a
                href="/books"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
