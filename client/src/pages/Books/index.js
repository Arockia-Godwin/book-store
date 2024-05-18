import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import NavBar from "../../components/navBar";
import Card from "../../components/card";
import { addBooksToCart, getBooks, getCart, getFilteredBooks } from "./helper";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

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
  const [selectedBook, setSelectedBook] = useState("");
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

  const onFilter = async (e) => {
    setSelectedBook(e.target.value);
  };

  const onSearch = async (e) => {
    if (selectedBook) {
      await getFilteredBooks(selectedBook).then((response) => {
        console.log("RESS", response);
        if (response.status === 200) {
          setBooks(response.data.data);
        } else {
          toast.error(response?.data.message || "Something went wrong!");
        }
      });
    } else {
      getBookList();
    }
  };

  const addToCart = async (data) => {
    await getCartList();
    let book = cartList.filter((obj) => obj._id === data._id);

    if (book.length) {
      toast.error("Item already Added to cart");
      return;
    }
    if (data.quantity > 0) {
      data.quantity = 1;
      await addBooksToCart(data).then((response) => {
        console.log("RESS", response);
        if (response.status === 200) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data?.message || "Something went wrong!");
        }
      });
    } else {
      toast.error("Quantiy is low");
    }
  };

  // const dispatch = useDispatch();
  return (
    <div className="bg-black  h-[100vh] w-full">
      <div className="w-full flex  items-center justify-center">
        <div className="w-[80%] flex flex-col">
          <NavBar />
          <div className="flex justify-between w-full mx-8">
            <div>
              <a
                href="/books/add"
                className="bg-[#D87D4A] h-10 rounded-md text-white w-[9rem] flex justify-center items-center my-2"
              >
                Add Books
              </a>
            </div>
            <div className="flex w-full justify-end">
              <input
                placeholder="Search"
                onChange={onFilter}
                className="h-10 p-2 mr-2 w-[16rem] rounded-md my-2"
              />
              <button
                onClick={() => onSearch()}
                className="bg-[#D87D4A] h-10 rounded-md text-white px-6 py-2 roundwd-md my-2"
              >
                Search
              </button>
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
      <Toast />
    </div>
  );
};

export default Books;
