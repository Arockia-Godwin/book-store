import React from "react";

const NavBar = () => {
  return (
    <header className="header w-full text-white sticky top-0 bg-black shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="font-bold text-xl">
        <a href="/dashboard">Book Store</a>
      </h1>

      <nav className="nav justify-end font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active">
            <a href="/dashboard">Home</a>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:twhite duration-200 cursor-pointer">
            <a href="/dashboard">Books</a>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
            <a href="/dashboard">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
