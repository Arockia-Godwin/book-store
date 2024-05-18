import React from "react";
import logOutImg from "../assets/images/logout-img.png";

const NavBar = () => {
  const logout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <header className="header w-full text-white sticky top-0 bg-black shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="font-bold text-xl">
        <a href="/dashboard">Book Store</a>
      </h1>

      <nav className="nav justify-end font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:twhite duration-200 cursor-pointer">
            <a href="/books">Books</a>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
            <a href="/cart">Cart</a>
          </li>
          <li className="p-4 border-b-2 border-white border-opacity-0 hover:text-white duration-200 cursor-pointer">
            <img
              onClick={() => logout()}
              className="h-[20px] w-[20px]"
              src={logOutImg}
              alt=""
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
