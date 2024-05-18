import React from "react";
import BookForm from "../../components/AddBookForm";
import NavBar from "../../components/navBar";
import { addBooks } from "./helper";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";
import { toast } from "react-toastify";

const bookData = [
  {
    name: "name",
    placeholder: "Book Name",
    rules: {
      required: "Book name is required",
    },
    type: "text",
  },
  {
    name: "author",
    placeholder: "Author",
    rules: {
      required: "Author name is required",
    },
    type: "text",
  },
  {
    name: "quantity",
    placeholder: "Quantity",
    rules: {
      required: "Quantity is required",
    },
    type: "number",
  },
  {
    name: "price",
    placeholder: "Price",
    rules: {
      required: "Price is required",
    },
    type: "number",
  },
  {
    name: "image",
    placeholder: "Image URL",
    rules: {},
    type: "text",
  },
];

const AddBooks = () => {
  const navigate = useNavigate();
  const navigateTo = (data) => {
    navigate(data);
  };
  const createBook = async (data) => {
    await addBooks(data).then((response) => {
      console.log("RESS", response);
      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigateTo("/books");
        }, 3000);
      } else {
        toast.error(response.data?.message || "Something went wrong");
      }
    });
  };
  return (
    <div className="w-[100vw] bg-black flex h-[100vh]">
      <div className="w-full flex flex-col items-center justify-start">
        <div className="w-[80%] flex flex-col">
          <NavBar />
          <div className="h-[90vh] w-full flex justify-center items-center">
            <BookForm bookData={bookData} onSubmit={createBook} />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default AddBooks;
