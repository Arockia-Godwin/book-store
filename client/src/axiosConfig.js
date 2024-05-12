import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/book-store",
  withCredentials: true,
});

export default instance;
