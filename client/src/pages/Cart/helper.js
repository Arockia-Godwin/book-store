import axios from "../../axiosConfig";

const getCart = async () => {
  try {
    let response = await axios.get("/cart/list");

    return response;
  } catch (error) {
    return error;
  }
};

const placeOrder = async (user) => {
  try {
    let response = await axios.post("/orders/add", user);

    return response;
  } catch (error) {
    return error;
  }
};

export { placeOrder, getCart };
