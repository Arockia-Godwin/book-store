import React from "react";
import NavBar from "../../components/navBar";
import Card from "../../components/card";

const Books = () => {
  let data = [
    {
      name: "Book",
      author: "Godwin",
      price: "Rs. 599",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fopen-book-books_4706503.html&psig=AOvVaw2AJKJ-ntTSBQYZIRc4_Vqp&ust=1715608765609000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDAveuiiIYDFQAAAAAdAAAAABAE",
    },
  ];

  return (
    <div className="bg-black  h-[100vh] w-full">
      <div className="w-full flex  items-center justify-center">
        <div className="w-[80%]">
          {/* <div className="border-b-[#979797] border-b-2"> */}
          <NavBar />
          {/* </div> */}
          <div className="w-full h-[90vh] flex">
            {data.map((datum, index) => {
              return <Card key={index} data={datum} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
