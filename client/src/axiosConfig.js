import axios from "axios";

let token = localStorage.getItem("userData");

const instance = axios.create({
  baseURL: "http://localhost:5000/api/book-store",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token || ""}`,
  },
});

export default instance;
