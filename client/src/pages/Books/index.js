import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import NavBar from "../../components/navBar";
import Card from "../../components/card";
import { addBooksToCart, getBooks, getCart, getFilteredBooks } from "./helper";

const Books = () => {
  // let data = [
  //   {
  //     name: "Book",
  //     author: "Godwin",
  //     price: "Rs. 599",
  //     image:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fopen-book-books_4706503.html&psig=AOvVaw2AJKJ-ntTSBQYZIRc4_Vqp&ust=1715608765609000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDAveuiiIYDFQAAAAAdAAAAABAE",
  //   },
  // ];

  const [books, setBooks] = useState([]);
  const [cartList, setCartList] = useState([]);
  // let bookList = [];

  useEffect(() => {
    getBookList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookList = async () => {
    await getBooks().then((response) => {
      console.log("RESS", response);
      if (response.status === 200) {
        // bookList = response.data.data;
        setBooks(response.data.data);
      } else {
        console.log("HERE");
      }
    });
  };

  const getCartList = async () => {
    await getCart().then((response) => {
      console.log("RESS", response);
      if (response.status === 200) {
        // bookList = response.data.data;
        setCartList(response.data.data);
      } else {
        console.log("HERE");
      }
    });
  };

  const onSearch = async (e) => {
    if (e.target.value.length) {
      await getFilteredBooks(e.target.value).then((response) => {
        console.log("RESS", response);
        if (response.status === 200) {
          setBooks(response.data.data);
        } else {
          console.log("HERE");
        }
      });
    } else {
      getBookList();
    }
  };

  const addToCart = async (data) => {
    await getCartList();
    let book = cartList.filter((obj) => obj._id === data._id);
    console.log("CART", cartList);
    if (book.length) {
      console.log("Already Added to cart");
      return;
    }
    if (data.quantity > 0) {
      data.quantity = 1;
      await addBooksToCart(data).then((response) => {
        console.log("RESS", response);
        if (response.status === 200) {
          console.log("HERE", response);
        } else {
          console.log("HERE");
        }
      });
    } else {
      console.log("Quantity is low");
    }
  };

  // const dispatch = useDispatch();
  return (
    <div className="bg-black  h-[100vh] w-full">
      <div className="w-full flex  items-center justify-center">
        <div className="w-[80%] flex flex-col">
          <NavBar />
          <div className="flex w-full">
            <div className="flex w-full justify-end">
              <input
                placeholder="Search"
                onChange={onSearch}
                className="h-10 p-2 mr-2 w-[16rem] rounded-md my-2"
              />
              <a
                href="/books/add"
                className="bg-[#D87D4A] h-10 rounded-md text-white px-6 py-2 roundwd-md my-2"
              >
                Add Books
              </a>
            </div>
          </div>
          <div className="w-full my-4 h-[80vh] overflow-y-scroll no-scrollbar flex justify-center items-center flex-wrap">
            {books.map((datum, index) => {
              return (
                <div className="m-4">
                  <Card key={index} data={datum} addToCart={addToCart} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
