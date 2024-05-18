import axios from "../../axiosConfig";

const getBooks = async () => {
  try {
    let response = await axios.get("/books/list");

    return response;
  } catch (error) {
    return error;
  }
};

const getCart = async () => {
  try {
    let response = await axios.get("/cart/list");

    return response;
  } catch (error) {
    return error;
  }
};

const getFilteredBooks = async (data) => {
  try {
    let response = await axios.get(`/books/filter/${data}`);

    return response;
  } catch (error) {
    return error;
  }
};

const addBooks = async (user) => {
  try {
    let response = await axios.post("/books/add", user);

    return response;
  } catch (error) {
    return error;
  }
};

const addBooksToCart = async (user) => {
  try {
    let response = await axios.post("cart/add", user);

    return response;
  } catch (error) {
    return error;
  }
};

export { getBooks, addBooks, getFilteredBooks, addBooksToCart, getCart };
